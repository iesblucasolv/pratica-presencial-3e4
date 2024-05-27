import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Editar() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { alterarUsuario, consultarUsuario } = useContext(UsuarioContext);

  async function handleSubmit(event) {
    event.preventDefault();

    document.getElementById('label-editar-nome').innerText = 'Nome:'
    document.getElementById('label-editar-nome').style.color = 'black'
    document.getElementById('label-editar-email').innerText = 'Email:'
    document.getElementById('label-editar-email').style.color = 'black'

    if(nome === '' || email === '' ){
      if(nome === ''){
        document.getElementById('label-editar-nome').innerText = 'Nome: (Campo obrigatório)'
        document.getElementById('label-editar-nome').style.color = '#f32424'
      }
      if(email === ''){
        document.getElementById('label-editar-email').innerText = 'Email: (Campo obrigatório)'
        document.getElementById('label-editar-email').style.color = '#f32424'
      }
    } else{
      if(!email.includes('@') || email.includes(' ')){
        document.getElementById('label-editar-email').innerText = 'Email: (Deve conter @ e Não deve conter espaços)'
        document.getElementById('label-editar-email').style.color = '#f32424'
      } else{
        await alterarUsuario({ id, nome, email,senha});
    navigate("/");
      }
    }
  }

  useEffect(() => {
    async function carregaDados() {
      const result = await consultarUsuario(id);
      setNome(result.nome);
      setEmail(result.email);    
      setSenha(result.senha);    
    }
    carregaDados();
  }, []);

  return (
    <>
    <div id="div-editar">
      <h1>Editar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div id="editar-input-container">
          <div className="input-controller">
              <label htmlFor="nome" id="label-editar-nome">Nome:</label>
              <input
                name="nome"
                placeholder="Nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </div>
          <div className="input-controller">
            <label htmlFor="email" id="label-editar-email">Email:</label>
            <input
              name="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <input
          name="senha"
          placeholder="Nova senha"
          type="hidden"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <div id="button-register-salvar">
          <input type="submit" value="Salvar" />
        </div>  
      </form>
      </div>
    </>
  );
}

export default Editar;