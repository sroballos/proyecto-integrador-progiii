import { Component } from "react";
import Navbar from "../NavBar/NavBar";

import "./Header.css"

class Header extends Component {
    constructor() {
        super()
        this.state = {
            test: true,
        }
    }
    render() {
        return (
            <header className="arete">
                <Navbar izquierda/>
                <h2>Areté</h2>
                <Navbar/>
            </header>
        );
    }
}

export default Header;
