import { Link,useNavigate } from "react-router-dom";
import { useContext, useState  } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login(){

    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    let verifiedEmail = false
    let verifiedSenha = false

    function handleClick(event){
        event.preventDefault();

        if(email === ''){
            document.getElementById('label-email').style.color = '#ec2626';
            document.getElementById('label-email').innerText = 'Email: (Campo obrigatório)'
            verifiedEmail = false
            if(!email.includes('@')){
                document.getElementById('label-email').style.color = '#ec2626';
                document.getElementById('label-email').innerText = 'Email: (O email deve conter @)'
                verifiedEmail = false
            } else{
                verifiedEmail = true
            }
            if(email.includes(' ')){
                document.getElementById('label-email').style.color = '#ec2626';
                document.getElementById('label-email').innerText = 'Email: (O email não deve conter espaços)'
                verifiedEmail = false
            } else{
                verifiedEmail = true
            }
        } else{
            verifiedEmail = true
        }
        if(senha === '' || senha === ' '){
            document.getElementById('label-senha').style.color = '#ec2626';
            document.getElementById('label-senha').innerText = 'Senha: (Campo obrigatório)'
            verifiedSenha = false
        }  else{
            verifiedSenha = true
        }

        if(verifiedEmail && verifiedSenha){
            login({ nome, email, senha });
            navigate("/");
        }
    }

    function onChangeEmail(event){
        setEmail(event.target.value)
        if(!event.target.value.includes('@')){
            document.getElementById('label-email').style.color = '#ec2626';
            document.getElementById('label-email').innerText = 'Email: (O email deve conter @)'
        }
        if(event.target.value.includes('@')){
            document.getElementById('label-email').style.color = 'black';
            document.getElementById('label-email').innerText = 'Email:'

            if(event.target.value.includes(' ')){
                document.getElementById('label-email').style.color = '#ec2626';
                document.getElementById('label-email').innerText = 'Email: (O email não deve conter espaços)'
            }
            if(!event.target.value.includes(' ')){
                document.getElementById('label-email').style.color = 'black';
                document.getElementById('label-email').innerText = 'Email:'
            }
        }

    }

    return(
        <>
        <div id="div-login">
            <form id="form-login">
                <h1>Login</h1>
                <div id="input-container">
                    <div class="input-controller">
                        <label htmlFor="email-login" id="label-email">Email:</label>
                        <input type="text" name="email-login" placeholder="exemplo@gmail.com"
          onChange={(event) => onChangeEmail(event)}></input>
                    </div>
                    <div className="input-controller">
                        <label htmlFor="senha-login" id="label-senha">Senha:</label>
                        <input type="password" name="senha-login" placeholder="********"
          onChange={(event) => setSenha(event.target.value)}></input>
                    </div>
                </div>
                <div id="button-entrar"><Link to='/register'>Criar conta</Link>
                    <button onClick={handleClick}>Entrar</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login;