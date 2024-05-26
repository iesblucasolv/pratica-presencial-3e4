import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Remover() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { excluirUsuario, consultarUsuario } = useContext(UsuarioContext);

  async function handleSubmit(event) {
    event.preventDefault();
    await excluirUsuario(id);
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
      <h1>Remover Usuário</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome: </label>
        <span>{nome}</span>
        <label>Email: </label>
        <span>{email}</span>
        <input type="submit" value="Remover" />
      </form>
    </>
  );
}

export default Remover;