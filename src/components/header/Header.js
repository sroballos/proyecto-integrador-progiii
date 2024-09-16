import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      test: true,
    };
  }
  render() {
    return (
      <header className="arete">
        <ul class="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Favoritos</Link>
          </li>
          <li>
            <Link to="/personajes">Ver todas</Link>
          </li>
        </ul>
        <h2>Areté</h2>
        <ul className="user">
          <li>
            Nombre usuario <img src="" alt="" />
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
