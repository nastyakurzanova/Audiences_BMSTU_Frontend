import "./OrderConstructor.sass"
import {useOrder} from "../../hooks/orders/useOrder";
import {Link} from "react-router-dom";

const OrderConstructor = () => {

    const {order} = useOrder()

    if (order == undefined) {
        return (
            <div className="constructor-container disabled">
                <span className="title">Новое бронирование</span>
            </div>
        )
    }

    return (
        <Link to={`/bookings/${order.id}`} className="constructor-container">
            <span className="title">Новое Бронирование</span>
            {order.services.length > 0 && <span className="badge">{order.services.length}</span>}
        </Link>
    )
}

export default OrderConstructor