import { createContext, useState } from "react";

import service from "../services/UsuarioService";

const UsuarioContext = createContext({});

function UsuarioContextProvider(props) {
  const [usuarios, setUsuarios] = useState([]);

  async function buscarTodos() {
    const result = await service.listar();
    setUsuarios(result);
  }

  async function buscarUm(id) {
    return await service.consultar(id);
  }

  async function inserir(usuario) {
    return await service.criar(usuario);
  }

  async function alterar(usuario) {
    return await service.editar(usuario);
  }

  async function excluir(id) {
    return await service.remover(id);
  }

  const contexto = {
    meusUsuarios: usuarios,
    inserirUsuario: inserir,
    alterarUsuario: alterar,
    listarUsuarios: buscarTodos,
    consultarUsuario: buscarUm,
    excluirUsuario: excluir,
  };

  return (
    <UsuarioContext.Provider value={contexto}>
      {props.children}
    </UsuarioContext.Provider>
  );
}

export { UsuarioContext, UsuarioContextProvider };
