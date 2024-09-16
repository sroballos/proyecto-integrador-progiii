import "./NavBar.css"
import { Link } from "react-router-dom"

const Navbar = (props) => {
    return(
    <nav>
        {props.izquierda? (
        <ul class="main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Favoritos</Link></li>
            <li><Link to="/personajes">Ver todas</Link></li>
        </ul>
        ) : (
        <ul class="user">
            <li>Nombre usuario <img src="" alt="" /></li>
        </ul>
        )}
    </nav>
    )
}
//Hola, el navbar tiene que ir adentro del header. 

export default Navbar