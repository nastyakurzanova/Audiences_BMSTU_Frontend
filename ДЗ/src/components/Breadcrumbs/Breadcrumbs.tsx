import "./Breadcrumbs.sass"
import { Link, useLocation } from "react-router-dom";
import { IoIosPulse } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdLaptop } from "react-icons/io";
import {FaChevronRight} from "react-icons/fa6";
import {FaHome} from "react-icons/fa";
import {useService} from "../../hooks/services/useService";
import {useOrder} from "../../hooks/orders/useOrder";

const Breadcrumbs = () => {

    const location = useLocation()

    const {service, setService} = useService()

    const { order, is_draft } = useOrder()

    let currentLink = ''

    const resetSelectedService = () => setService(undefined)

    const topics = {
        "services": "Аудитории",
        "orders": "Брониовния",
        "home": "Главная",
        "login": "Вход",
        "register": "Регистрация",
        "profile": "Личный кабинет"
    }

    const exclude_topics = ["edit"]

    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {

        currentLink += `/${crumb}`

        if (exclude_topics.find(x => x == crumb)) {
            return
        }

        if (Object.keys(topics).find(x => x == crumb)) {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink} onClick={resetSelectedService}>
                        { topics[crumb] }
                    </Link>

                    <IoMdArrowRoundForward className={"chevron-icon"}/>

                </div>
            )
        }

        if (currentLink.match(new RegExp('add')))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink}>
                        Новый сервис
                    </Link>

                    <IoMdArrowRoundForward className={"chevron-icon"}/>

                </div>
            )
        }


        if (currentLink.match(new RegExp('bookings/(\d*)')))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink}>
                        {is_draft ? "Новое бронирование" : "Брониование номер" + order?.id}
                    </Link>

                    <IoMdArrowRoundForward className={"chevron-icon"}/>

                </div>
            )
        }

        if (currentLink.match(new RegExp('audiences/(\d*)')))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink}>
                        {service?.name}
                    </Link>

                    <IoMdArrowRoundForward className={"chevron-icon"}/>

                </div>
            )
        }
    });

    return (
        <div className="breadcrumbs-wrapper">
            <div className="breadcrumbs">

                <div className="crumb">

                    <Link to={"/audiences"}>
                        <IoMdLaptop className="home-icon" />
                    </Link>

                    <IoMdArrowRoundForward className="chevron-icon" />

                </div>

                {crumbs}

            </div>
        </div>
    )
}

export default Breadcrumbs;