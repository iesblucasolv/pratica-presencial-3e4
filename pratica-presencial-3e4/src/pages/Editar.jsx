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
    await alterarUsuario({ id, nome, email, senha });
    navigate("/");
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
      <h1>Editar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="nome"
          placeholder="Nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {/* <input
          name="senha"
          placeholder="Nova senha"
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        /> */}
        <input type="submit" value="Salvar" />
      </form>
    </>
  );
}

export default Editar;