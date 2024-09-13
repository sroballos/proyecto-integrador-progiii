import { Component } from "react";

import "./footer.css"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        }
    }

    color() {
        this.setState({
            isHovered: !this.state.isHovered
        });
    }

    render() {
        return (
            <footer>
                <div className="presentacion">
                    <h2>Marcos Beccar</h2>
                    <h2>Carolina Martínez</h2>
                    <h2>Sebastían Roballos</h2>
                </div>

                {this.state.isHovered ? <p className="hovered" onMouseEnter={() => this.color()} onMouseLeave={() => this.color()}> Areté © 2024. Todos los derechos reservados </p>
                    : <p onMouseEnter={() => this.color()} onMouseLeave={() => this.color()}> Areté © 2024. Todos los derechos reservados </p>
                }
            </footer>
        );
    }
}

export default Footer;
