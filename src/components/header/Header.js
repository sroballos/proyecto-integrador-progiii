import { Component } from "react";

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
                <p>test</p>
                <h2>Areté</h2>
                <p>test2</p>
            </header>
        );
    }
}

export default Header;
