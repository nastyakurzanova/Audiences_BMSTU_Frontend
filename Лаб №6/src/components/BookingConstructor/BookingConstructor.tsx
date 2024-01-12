import "./BookingConstructor.sass"
import {useDraftBookinfg} from "../../hooks/useDraftBooking";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useToken} from "../../hooks/useToken";
import axios from "axios";
import {Response} from "../../Types";

const BookingConstructor = () => {

    const {booking, setBooking} = useDraftBookinfg()

    const {access_token} = useToken()

    const fetchDraftBooking = async () => {

        const response: Response = await axios(`http://localhost:8000/api/booking/draft/`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'authorization': access_token
            },
        })

        if (response.status != 404)
        {
            setBooking(response.data)
        }

    }

    useEffect(() => {
        fetchDraftBooking()
    }, [])

    return (
        <Link to="/booking/draft/" className="booking-constructor-container">
            <span className="title">Новое бронирование</span>
            
             {booking?.audiences.length > 0  && <span className="badge">{booking?.audiences.length}</span>}
            {/* {(booking?.audiences || []).length > 0 && <span className="badge">{(booking?.audiences || []).length}</span>} */}

        </Link>
    )
}

export default BookingConstructor