import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Home() {
  const { meusUsuarios, listarUsuarios } = useContext(UsuarioContext);

  useEffect(() => {
    listarUsuarios();
  }, []);

  function handleRemover(event) {
    event.preventDefault();
  }

  return (
    <>
      <h1>Home</h1>
      <Link to="/register">Registrar</Link>
      <ul>
        {meusUsuarios.map((usuario, key) => (
          <li key={key}>
            {usuario.nome} - {usuario.email}{" "}
            <Link to={`/editar/${usuario.id}`}>Editar</Link>{" "}
            <Link to={`/remover/${usuario.id}`}>Remover</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;