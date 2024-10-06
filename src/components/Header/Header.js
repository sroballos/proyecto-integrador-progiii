import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";

const Header = (props) => {
    return (
      <header>
        <div className="separacion">
          <ul className="main-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favoritos</Link>
            </li>
            <li>
              <Link to="/popular">Ver todas</Link>
            </li>
          </ul>
        </div>
        <div className="separacion">
          <h2>Areté</h2>
        </div>
        <div className="separacion">
          <ul>
            <li>
              <SearchForm history={props.history} />
            </li>
          </ul>
        </div>
      </header>
    );
  }

export default Header;
