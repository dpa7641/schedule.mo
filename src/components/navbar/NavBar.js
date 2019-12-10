import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin, latestCalendar } from "../../reducer/actionCreators";

const NavBar = () => {
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
            className="nav-item nav-link active btn btn-sm btn-block"
            to="crear-horario"
          >
            <img
              src={require("../../icons/anadir.png")}
              className="imagen"
              alt="anadir"
            />
            <label>Crear nuevo Horario</label>
          </Link>
          <Link className="nav-item nav-link btn btn-sm" to="/settings">
            <img
              src={require("../../icons/settings.png")}
              className="imagen"
              alt="settings"
            />
            <label>Opciones</label>
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
            <label>Cerrar Sesión</label>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
