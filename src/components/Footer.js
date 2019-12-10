import React from "react";

import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <Link to="/horarios">
            <div class="jaula col">
              <img
                src={require("../icons/home.png")}
                className="imagen"
                alt="logout"
              />
            </div>
          </Link>
          <Link to="/lista-horarios">
            <div class="jaula col">
              <img
                src={require("../icons/calendar.png")}
                className="imagen"
                alt="logout"
              />
            </div>
          </Link>
          <Link to="/actividades">
            <div class="jaula col">
              <img
                src={require("../icons/events.png")}
                className="imagen"
                alt="logout"
              />
            </div>
          </Link>
          <Link to="/share">
            <div class="jaula col">
              <img
                src={require("../icons/compartir.png")}
                className="imagen"
                alt="logout"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
