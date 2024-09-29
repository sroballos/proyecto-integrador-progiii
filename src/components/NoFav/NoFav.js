import "./NoFav.css";
import { Link } from "react-router-dom";

const NoFav = () => {
  return (
    <div className="NoFav">
      <h2>No hay favoritos</h2>

      <Link to="/" className="botoncito">
        <button>Encontrá películas</button>
      </Link>
    </div>
  );
};

export default NoFav;
