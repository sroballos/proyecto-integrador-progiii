
import React from "react";
import {Link} from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
        <h1 className="not-found-titulo">404</h1>
        <h2 className="not-found-subtitulo">Opps! Página no encontrada</h2>
        <p className="not-found-texto">
            Estas buscando una página que no existe.
        </p>
        <Link to="/" className="not-found-home-link">Volve al inicio</Link>
    </div>
    );
  }
  
  export default NotFound;
  