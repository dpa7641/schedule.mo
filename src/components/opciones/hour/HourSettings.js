import React from "react";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
//import { arrowRoundBack } from "ionicons/icons";
import { Link } from "react-router-dom";

const HourSettings = ({ history }) => {
  const calendar_id = useSelector(get("session.calendar_id"));

  return (
    <div className="page">
      <nav className="navbar navbar-light bg-light">
        <button className="back" onClick={() => history.goBack()}>
          <img
            src={require("../../../icons/back.png")}
            className="imagen"
            alt="back"
          />
        </button>
        <a className="navbar-brand">Opciones Hora</a>
      </nav>
      <div>
        <div>
          <Link className="btn" to="/new-hour">
            <h4>Nueva Hora</h4>
          </Link>
          <Link className="btn btn-outline-danger" to="/delete-hours">
            <h4>Eliminar Horas</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HourSettings;
