import React from "react";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./Settings.css";

const Settings = ({ history }) => {
  const calendar_id = useSelector(get("session.calendar_id"));

  const eliminar = () => {
    console.log("usuario eliminado");
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <button className="back" onClick={() => history.goBack()}>
          <img
            src={require("../../icons/back.png")}
            className="imagen"
            alt="back"
          />
        </button>
        <a className="navbar-brand">Creación de Horario</a>
      </nav>
      <section>
        <Link className="btn" to="/settings">
          <h4>Editar Horario</h4>
        </Link>
        <Link className="btn" to="/hour-settings">
          <h4>Horas</h4>
        </Link>
        <Link className="btn" to="/settings">
          <h4>Actividades</h4>
        </Link>
        <button className="btn btn-danger" onClick={() => eliminar()}>
          <h4>Eliminar Este Horario</h4>
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Settings;
