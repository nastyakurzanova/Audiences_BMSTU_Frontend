import "./AudiencesCard.sass"
import {Audiences} from "../../../utils/types";
import {Link} from "react-router-dom";
import mockImage from "/src/assets/mock.png"

const AudiencesCard = ({ audiences, isMock }: {audiences:Audiences, isMock:boolean }) => {

    const img = `http://127.0.0.1:8000/api/audiences/${audiences.id}/image/`

    return (
        <div className="card-wrapper">

            <div className="preview">
                <img src={isMock ? mockImage : img}  alt=""/>
            </div>

            <div className="card-content">

                <div className="content-top">

                    <h3 className="title">{audiences.name}</h3>

                </div>

                <div className="content-bottom">

                    <Link to={`/audiences/${audiences.id}`}>
                        Подробнее
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default AudiencesCard;