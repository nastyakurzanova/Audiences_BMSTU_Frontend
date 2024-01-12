import "./AudiencesPage.sass"
import {Dispatch, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {iAudiencesMock, requestTime} from "../../utils/consts";
import {Audiences} from "../../utils/types";
import mockImage from "/src/assets/mock.png"

const AudiencesPage = ({ selectedAudiences, setSelectedAudiences }: { selectedAudiences:Audiences | undefined, setSelectedAudiences: Dispatch<Audiences| undefined>}) => {

    const { id } = useParams<{id: string}>();

    const [isMock, setIsMock] = useState<boolean>(false);

    useEffect(() => {
        fetchData()
    }, [])

    if (id == undefined){
        return;
    }

    const fetchData = async () => {

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/audiences/${id}`, {
                method: "GET",
                signal: AbortSignal.timeout(requestTime)
            });

            if (!response.ok)
            {
                CreateMock()
                return;
            }

            const service: Audiences = await response.json()

            setSelectedAudiences(service)

            setIsMock(false)

        } catch
        {
            CreateMock()
        }

    };

    const CreateMock = () => {
        setSelectedAudiences(iAudiencesMock.find((service:Audiences) => service?.id == parseInt(id)))
        setIsMock(true)
    }

    const img = `http://127.0.0.1:8000/api/audiences/${id}/image/`

    if (selectedAudiences == undefined) {
        return (
            <div className="page-details-wrapper">

                <Link className="return-link" to="/">
                    Назад
                </Link>

            </div>
        )
    }

    return (
        <div className="page-details-wrapper">

            <Link className="return-link" to="/">
                Назад
            </Link>

            <div className="left">

                <img src={isMock ? mockImage : img}  alt=""/>

            </div>

            <div className="right">

                <div className="info-container">

                    <h2 className="name">{selectedAudiences.name}</h2>

                    <br />

                    <span>{selectedAudiences.info}</span>

                    <br />

                    <span>Корпус: {selectedAudiences.corpus}</span>

                    <br />

                    <span>Цена: {selectedAudiences.price}</span>

                </div>

            </div>

        </div>
    )
}

export default AudiencesPage;