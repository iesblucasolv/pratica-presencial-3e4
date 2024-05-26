import { createContext, useState } from "react";

import service from "../services/UsuarioService";

const AuthContext = createContext({});

function AuthContextProvider(props){

    const [user,setUser] = useState({ email: null, logado: false });
    const [usuarios, setUsuarios] = useState([]);

    function login(usuarioLogado){
        async function buscarTodosUsuarios() {
            const result = await service.listar();
            usuarios.map(usuario=>{
                if(usuarioLogado.email === usuario.email && usuarioLogado.senha === usuario.senha){
                    const email = usuarioLogado.email

                    setUser({email, logado: true})
                }
            })
            setUsuarios(result);
          }

        buscarTodosUsuarios();
    }

    function logout(){
        setUser({email: null, logado: false})
    }

    const contexto = {
        user,
        login,
        logout
    }

    return <AuthContext.Provider value={contexto}>
        {props.children}
    </AuthContext.Provider>
}

export {AuthContext, AuthContextProvider}