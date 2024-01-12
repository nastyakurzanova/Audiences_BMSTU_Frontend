import "./NavMenu.sass"
import {Link} from "react-router-dom";

const NavMenu = () => {
    return (
        <div className="menu-wrapper">
            
            <Link to="/audiences" className="menu-item" >
                <span>Аудитории</span>
            </Link>

            <Link to="/profile" className="menu-item">
                <span>Личный кабинет</span>
            </Link>

        </div>
    )
}

export default NavMenu;