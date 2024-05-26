import { Link,useNavigate } from "react-router-dom";
import { useContext, useState  } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login(){

    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleClick(event){
        event.preventDefault();
        login({ nome, email, senha });
        navigate("/");
    }

    return(
        <>
        <div id="div-login">
            <form id="form-login">
                <h1>Login</h1>
                <div id="input-container">
                    <div class="input-controller">
                        <label htmlFor="email-login">Email:</label>
                        <input type="text" name="email-login" placeholder="exemplo@gmail.com"
          onChange={(event) => setEmail(event.target.value)}></input>
                    </div>
                    <div className="input-controller">
                        <label htmlFor="senha-login">Senha:</label>
                        <input type="password" name="senha-login" placeholder="********"
          onChange={(event) => setSenha(event.target.value)}></input>
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