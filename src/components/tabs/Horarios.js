import React from "react";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
import "./Horarios.css";

const Horario = ({ history }) => {
  const user_id = useSelector(get("session.user_id"));
  const calendar_id = useSelector(get("session.calendar_id"));

  return (
    <div className="page">
      <section>
        <div className="welcome-card">
          <div>
            <h2>creacion de horario</h2>
          </div>
        </div>
        <p>aqui colocar los horarios</p>
      </section>
    </div>
  );
};

export default Horario;
