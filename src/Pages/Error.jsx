import { Link } from "react-router-dom";

const Error = () => {
    return(
        <h1>Неверный путь. Ошибка 404. Выберете одну из путей вверху страници. Или перейдите <Link to="/">на главную</Link></h1>
    ); 
}

export default Error;