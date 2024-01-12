import "./BookingPage.sass"
import AudiencesCard from "../AudiencesListPage/AudiencesCard/AudiencesCard";
import {useDraftBookinfg} from "../../hooks/useDraftBooking";
import axios from "axios";
import {useToken} from "../../hooks/useToken";
import {useNavigate } from "react-router-dom";
import {Audiences, Response} from "../../Types";
const BookingPage = () => {

    const navigate = useNavigate()

    const {booking, setBooking} = useDraftBookinfg()

    const cards = booking?.audiences ? booking?.audiences.map((audience: Audiences)  => (
        <AudiencesCard audiences={audience} key={audience.id} />
    )): [];

    const {access_token} = useToken()

    const sendBooking= async () => {

        const response: Response = await axios(`http://localhost:8000/api/booking/${booking.id}/update_status_user/`, {
            method: "PUT",
            headers: {
			
                "Content-type": "application/json; charset=UTF-8",
                'authorization': access_token
            }
        })

        if (response.status == 200)
        {
            setBooking(undefined)

            navigate("/booking")
        }
    }

    const deleteBooking = async () => {

        const response: Response = await axios(`http://localhost:8000/api/booking/${booking.id}/delete/`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'authorization': access_token
            }
        })

        if (response.status == 200)
        {
            setBooking(undefined)

            navigate("/audiences")
        }

    }


    if (booking == undefined)
    {
        return (
            <div className="booking-page-wrapper">
                <h1>Пусто</h1>
            </div>
        )
    }

    return (
        <div className="booking-page-wrapper">

            <div className="booking-wrapper">
                <div className="top">
                    <h3>Забронированные аудитории </h3>
                </div>

                <div className="bottom">
                    {cards}
                </div>
            </div>

            <div className="buttons-wrapper">

                <button className="booking-button" onClick={sendBooking}>Заказать</button>

                <button className="delete-button" onClick={deleteBooking}>Удалить</button>

            </div>


        </div>
    )
}

export default BookingPage;