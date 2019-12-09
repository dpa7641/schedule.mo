import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Actividades = () => {
  return (
    <div>
      <div>
        <div>
          <p>lista de actividades</p>
        </div>
      </div>
      <div>
        <div>
          <Link to="/eventos">
            <h2>detalles</h2>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Actividades;
