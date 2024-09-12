import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav>
        <ul class="main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Favoritos</Link></li>
            <li><Link to="/personajes">Ver todas</Link></li>
        </ul>
        <ul class="user">
            <li>Nombre usuario <img src="" alt="" /></li>
        </ul>
    </nav>
    )
}


export default Navbar