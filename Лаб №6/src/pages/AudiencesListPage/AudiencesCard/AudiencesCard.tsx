import "./AudiencesCard.sass"
import {Link} from "react-router-dom";
import {Audiences, Response} from "../../../Types";
import {useAuth} from "../../../hooks/useAuth";
import {useToken} from "../../../hooks/useToken";
import {useDraftBookinfg} from "../../../hooks/useDraftBooking";
import axios from "axios";


const AudiencesCard = ({ audiences }: {audiences:Audiences }) => {

    const {access_token} = useToken()

    const {is_authenticated} = useAuth()

    const {booking, setBooking} = useDraftBookinfg()



    const addToBooking = async () => {

        const response: Response = await axios(`http://localhost:8000/api/audiences/${audiences.id}/add_to_booking/`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'authorization': access_token
            },
        });

        if (response.status == 200) {
            setBooking(response.data) 
            {console.log(booking)}
        }
    }
    // const is_dr=()=>{
    //     let res = false
    //     booking.audiences.forEach((x:Audiences)=>{
    //         if(x==audiences){
    //             res=true
    //         }
        
    //     })
    //     return res
    // }
    const deleteFromBooking = async () => {
        const response: Response = await axios(`http://localhost:8000/api/booking/${booking.id}/delete_audiences/${audiences.id}/`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'authorization': access_token
            },
        });

        setBooking(response.data)
    }



    const img = `http://127.0.0.1:8000/api/audiences/${audiences.id}/image/`

    return (
        <div className="card-wrapper">

            <div className="preview">
                <img src={img}  alt=""/>
            </div>

            <div className="card-content">

                <div className="content-top">

                    <h3 className="title"> {audiences.name} </h3>

                </div>

                <div className="content-bottom">

                    <Link to={`/audiences/${audiences.id}`}>
                        Подробнее
                    </Link>

                    {is_authenticated && location.pathname.includes("audiences") && <button onClick={addToBooking}>Добавить</button> }
                    {is_authenticated && location.pathname.includes("draft") && <button onClick={deleteFromBooking}>Удалить</button> }

                </div>

            </div>

        </div>
    )
}

export default AudiencesCard;