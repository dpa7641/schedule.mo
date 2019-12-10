import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
import "./Horarios.css";
import Footer from "../Footer";
import { userLogin, latestCalendar } from "../../reducer/actionCreators";
import { Link } from "react-router-dom";
const Horario = ({ history }) => {
  const user_id = useSelector(get("session.user_id"));
  const calendar_id = useSelector(get("session.calendar_id"));
  const dispatch = useDispatch();

  const cerrarSesion = () => {
    dispatch(
      userLogin({
        isLoggedIn: false,
        user_id: 0
      })
    );
    dispatch(latestCalendar(-1));
  };
  return (
    <div className="page">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#">
          Schedule.mo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-item nav-link active btn btn-sm"
              to="crear-horario"
            >
              <img
                src={require("../../icons/anadir.png")}
                className="imagen"
                alt="anadir"
              />
              <span>Crear nuevo Horario</span>
            </Link>
            <Link className="nav-item nav-link btn btn-sm" to="/settings">
              <img
                src={require("../../icons/settings.png")}
                className="imagen"
                alt="settings"
              />
              <span>Opciones</span>
            </Link>
            <Link
              className=" cierre nav-item nav-link btn btn-danger btn-sm"
              to="/login"
              onClick={() => cerrarSesion()}
            >
              <img
                src={require("../../icons/logout.png")}
                className="imagen"
                alt="logout"
              />
              <span>Cerrar Sesión</span>
            </Link>
          </div>
        </div>
      </nav>
      <section>
        <div className="welcome-card">
          <div>
            <h3>{`Comienzo ${user_id} + ${calendar_id}`}</h3>
            <h2>creacion de horario</h2>
          </div>
        </div>
        <p>aqui colocar los horarios</p>
      </section>

      <Footer />
    </div>
  );
};

export default Horario;
