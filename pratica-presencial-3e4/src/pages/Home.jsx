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
    <div id="home-container">
      <header>
        <h1>Home</h1>
        <Link className="novo-usuario" to="/register"><button>Registrar novo usuário</button></Link>
      </header>
      <h3>Usuários registrados</h3>
      <ul>
        {meusUsuarios.map((usuario, key) => (
          <li key={key}>
            {usuario.nome} - {usuario.email}{" "}
            <div id="actions-usuarios">
              <Link className="editar-usuario" to={`/editar/${usuario.id}`}><button>Editar</button></Link>{" "}
              <Link className="remover-usuario" to={`/remover/${usuario.id}`}><button>Remover</button></Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Home;