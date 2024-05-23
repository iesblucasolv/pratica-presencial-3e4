import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login(){

    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleClick(event){
        login("teste@teste.com","123")
        navigate('/')
    }

    return(
        <>
            <h1>Login</h1>
            <button onClick={handleClick}>Entrar</button>
        </>
    )
}

export default Login;