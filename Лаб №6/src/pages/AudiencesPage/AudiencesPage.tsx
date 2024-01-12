import "./AudiencesPage.sass"
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useAudiences} from "../../hooks/useAudiences";
import axios from "axios";
import {Response} from "../../../src/Types";

const AudiencesPage = () => {

    const { id } = useParams<{id: string}>();

    const { audiences , setAudiences } = useAudiences()

    useEffect(() => {
        fetchData()
    }, [])

    if (id == undefined){
        return;
    }

    const fetchData = async () => {

        const response:Response = await axios(`http://127.0.0.1:8000/api/audiences/${id}`, {
            method: "GET"
        });

        if (response.status == 200)
        {
            setAudiences(response.data)
        }
    };

    if (audiences == undefined)
    {
        return (
            <div>

            </div>
        )
    }

    const img = `http://127.0.0.1:8000/api/audiences/${id}/image/`

    return (
        <div className="page-details-wrapper">

            <Link className="return-link" to="/">
                Назад
            </Link>

            <div className="left">

                <img src={img}  alt=""/>

            </div>

            <div className="right">

                <div className="info-container">

                    <h2 className="name">{audiences.name}</h2>

                    <br />

                    <span className="description">Описание: {audiences.info}</span>

                    <br />

                    <span className="description">Стоимость: {audiences.price} руб.</span>

                    <br />

                    <span className="description">корпус: {audiences.corpus} </span>

                    <br />

                </div>

            </div>

        </div>
    )
}

export default AudiencesPage;