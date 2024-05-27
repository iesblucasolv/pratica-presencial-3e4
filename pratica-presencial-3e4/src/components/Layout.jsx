import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Layout(){

    const {logout} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleClick(evenet){
        logout()
        navigate('/login')
    }

    return(
        <>
            <ul id="ulNavigation">
                <h4>Menu</h4>
                <div id="nav-buttons">
                    <li><NavLink to="/"><button>Home</button></NavLink></li>
                    <li><button onClick={handleClick}>Sair</button></li>
                </div>
            </ul>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout