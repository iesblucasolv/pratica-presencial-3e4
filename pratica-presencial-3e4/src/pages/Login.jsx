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
        <div id="div-login">
            <form id="form-login">
                <h1>Login</h1>
                <div id="input-container">
                    <div class="input-controller">
                        <label htmlFor="email-login">Email:</label>
                        <input type="text" name="email-login" placeholder="exemplo@gmail.com"></input>
                    </div>
                    <div className="input-controller">
                        <label htmlFor="senha-login">Senha:</label>
                        <input type="password" name="senha-login" placeholder="********"></input>
                    </div>
                </div>
                <div id="button-entrar">
                    <button onClick={handleClick}>Entrar</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login;