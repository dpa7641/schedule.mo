import React from "react";

import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="fila">
          <Link to="/horarios">
            <div className="columna">icono home</div>
          </Link>
          <Link to="/lista-horarios">
            <div className="columna">icono horarios</div>
          </Link>
          <Link to="/actividades">
            <div className="columna">icono actividades</div>
          </Link>
          <Link to="/share">
            <div className="columna">icono compartir</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
