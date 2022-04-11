import { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/Form/MyButton";
import MyInput from "../components/Form/MyInput";
import { StateLogContext } from "../context/Context";

const Login = () => {

    const {UserStateLog, setUserStateLog} = useContext(StateLogContext)

    const Input = (e) => {
        e.preventDefault();
        setUserStateLog(true)
        localStorage.setItem('UseState', 'true');
    }
    
    /*const login = (e) => {
        e.preventDefault();
        setUserStateLog(true);
        console.log('TRUE')
    }*/

    return(
        <div style={{width: '600px', marginLeft: '500px'}}>  
            <h1>Страница для входа или резистрации</h1>
            <form>     
                <MyInput type="text" placeholder="Логин"/>
                <MyInput type="password" placeholder="Пароль"/>
                <MyButton onClick={Input} ><Link style={{textDecoration: "none"}} to="/">Войти</Link></MyButton>
            </form>    
        </div>        
    )
}

export default Login;