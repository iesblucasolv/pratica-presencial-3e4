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
            <div id="formlogin">
                <label htmlFor="emaillogin">Email:</label>
                <input type="text" name="emaillogin" placeholder="exemplo@gmail.com"></input>
                <label htmlFor="senhalogin">Senha:</label>
                <input type="password" name="senhalogin" placeholder="********"></input>
            </div>
            <button onClick={handleClick}>Entrar</button>
        </>
    )
}

export default Login;