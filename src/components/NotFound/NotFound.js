
import React from "react";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Opps! Página no encontrada</h2>
        <p className="not-found-text">
            Estas buscando una página que no existe.
        </p>
        <a href="/" className="not-found-home-link">Volve al inicio</a>
    </div>
    );
  }
  
  export default NotFound;
  