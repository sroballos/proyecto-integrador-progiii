import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";

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
        <ul className="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favoritos</Link>
          </li>
          <li>
            <Link to="/personajes">Ver todas</Link>
          </li>
        </ul>
        <h2>Areté</h2>
        <ul className="user">
          <li>
            <SearchForm/>
          </li>
        </ul>


      </header>
    );
  }
}

export default Header;
