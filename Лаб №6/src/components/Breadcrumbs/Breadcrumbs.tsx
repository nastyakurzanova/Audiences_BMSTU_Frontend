import "./Breadcrumbs.sass"
import { Link, useLocation } from "react-router-dom";
import {useAudiences} from "../../hooks/useAudiences";
import {FaChevronRight} from "react-icons/fa6";
import {FaHome} from "react-icons/fa";

const Breadcrumbs = () => {

    const location = useLocation()

    let currentLink = ''

    const { audiences, setAudiences } = useAudiences()

    const resetSelectedAudiences = () => setAudiences(undefined)

    const topics = {
        "audiences": "Аудитории",
        "draft": "Заказ",
        "booking": "Заказы",
        "home": "Главная",
        "login": "Вход",
        "register": "Регистрация",
        "profile": "Профиль",
    }

    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {

        currentLink += `/${crumb}`

        if (Object.keys(topics).find(x => x == crumb))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink} onClick={resetSelectedAudiences}>
                        { topics[crumb] }
                    </Link>

                    <FaChevronRight className={"chevron-icon"}/>

                </div>
            )
        }

        if (currentLink.match(new RegExp('audiences/(\d*)')))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink}>
                        {audiences?.name}
                    </Link>

                    <FaChevronRight className={"chevron-icon"}/>

                </div>
            )
        }
    });

    return (
        <div className="breadcrumbs-wrapper">
            <div className="breadcrumbs">

                <div className="crumb">

                    <Link to={"/audiences"}>
                        <FaHome className="home-icon" />
                    </Link>

                    <FaChevronRight className="chevron-icon" />

                </div>

                {crumbs}

            </div>
        </div>
    )
}

export default Breadcrumbs;