import { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/Form/MyButton";
import { StateLogContext } from "../context/Context";
import "../style/App.css"

const Navbar = () => {

    const{UserStateLog, setUserStateLog} = useContext(StateLogContext)
    const Exit = (e) => {
        e.preventDefault();
        localStorage.removeItem('UseState');
        setUserStateLog(false)
    }

    return(
        <div className="NavBlock">
            <div className="Navbar">
                <MyButton onClick={Exit} className="exit"><Link style={{textDecoration: "none"}} to="/login">Выйти</Link></MyButton>
                <Link to="/" className="Navi">Посты</Link>
                <Link to="/about">Про нас</Link>
            </div>
        </div>
    )
}

export default Navbar;