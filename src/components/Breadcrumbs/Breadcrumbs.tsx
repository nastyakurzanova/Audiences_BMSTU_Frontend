import "./Breadcrumbs.sass"
import { Link, useLocation } from "react-router-dom";
import {FaChevronRight} from "react-icons/fa6";
import {FaHome} from "react-icons/fa";

interface SelectedAudiences {
    name:string,
    info:string
   }
   

const Breadcrumbs = ({ selectedAudiences, setSelectedAudiences }:{ selectedAudiences: SelectedAudiences, setSelectedAudiences: Function }) => {

    const location = useLocation()

    let currentLink = ''

    const topics: Record<string, string> = {
        "audiences": "Аудитории МГТУ",
        "profile": "Личный кабинет"
    }

    const resetSelectedAudiences = () => setSelectedAudiences(undefined)

    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {

        currentLink += `/${crumb}`

        if (Object.keys(topics).find(x => x == crumb))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink} onClick={resetSelectedAudiences}>
                        { (topics as never)[crumb] }
                    </Link>

                    <FaChevronRight className={"chevron-icon"}/>

                </div>
            )
        }

        if (currentLink.match(new RegExp('audiences/(d*)')))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink}>
                        { selectedAudiences?.name }
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
                        <b>Домой</b>
                    
                    </Link>

                    <FaChevronRight className="chevron-icon" />

                </div>

                {crumbs}

            </div>
        </div>
    )
}

export default Breadcrumbs;