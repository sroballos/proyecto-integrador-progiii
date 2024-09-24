import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }
  render() {
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
            <SearchForm history={this.props.history} />
          </li>
        </ul>
        </div>


      </header>
    );
  }
}

export default withRouter(Header);
