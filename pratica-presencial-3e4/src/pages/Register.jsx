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
    await inserirUsuario({ nome, email, senha });
    navigate("/");
  }

  return (
    <>
      <h1>Novo Usuário</h1>
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
        <input
          name="senha"
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <input type="submit" value="Salvar" />
      </form>
    </>
  );
}

export default Novo;