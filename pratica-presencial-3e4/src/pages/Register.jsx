import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Novo() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { inserirUsuario } = useContext(UsuarioContext);

  async function handleSubmit(event) {
    event.preventDefault();
    
    document.getElementById('label-register-nome').innerText = 'Nome:'
    document.getElementById('label-register-nome').style.color = 'black'
    document.getElementById('label-register-email').innerText = 'Email:'
    document.getElementById('label-register-email').style.color = 'black'
    document.getElementById('label-register-senha').innerText = 'Senha:'
    document.getElementById('label-register-senha').style.color = 'black'

    if(nome === '' || email === '' || senha === ''){
      if(nome === ''){
        document.getElementById('label-register-nome').innerText = 'Nome: (Campo obrigatório)'
        document.getElementById('label-register-nome').style.color = '#f32424'
      }
      if(email === ''){
        document.getElementById('label-register-email').innerText = 'Email: (Campo obrigatório)'
        document.getElementById('label-register-email').style.color = '#f32424'
      }
      if(senha === ''){
        document.getElementById('label-register-senha').innerText = 'Senha: (Campo obrigatório)'
        document.getElementById('label-register-senha').style.color = '#f32424'
      }
    } else{
      if(!email.includes('@') || email.includes(' ')){
        document.getElementById('label-register-email').innerText = 'Email: (Deve conter @ e Não deve conter espaços)'
        document.getElementById('label-register-email').style.color = '#f32424'
      } else{
        await inserirUsuario({ nome, email, senha });
        navigate("/");
      }
    }
  }

  return (
    <>
    <div id="div-register">
      <h1>Novo Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div id="register-input-container">
          <div className="input-controller">
            <label htmlFor="nome" id="label-register-nome">Nome:</label>
            <input
              name="nome"
              placeholder="Nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </div>
          <div className="input-controller">
            <label htmlFor="email" id="label-register-email">Email:</label>
            <input
              name="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-controller">
            <label htmlFor="senha" id="label-register-senha">Senha:</label>
            <input
              name="senha"
              placeholder="Senha"
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              />
          </div> 
        </div>
        <div id="button-register-salvar">
          <input id="botao-salvar-register" type="submit" value="Salvar" />
        </div>
      </form>
    </div>
    </>
  );
}

export default Novo;