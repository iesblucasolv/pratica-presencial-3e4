import { Link,useNavigate } from "react-router-dom";

function Pag404(){

    const navigate = useNavigate()

    function handleClick(event){
        navigate('/login')
    }

    return(
        <>
        <main id="main404">
            <h1>Essa página não existe! (404)</h1>
            <div id="div404">
                <h3>Volte para a página de login para continuar navegando</h3>
                <div id="button404-container">
                    <button onClick={handleClick}>Página de login</button>
                </div>
            </div>
        </main>
        </>
    )
}

export default Pag404;