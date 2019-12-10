import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";

const DeleteHours = ({ history }) => {
  const calendar_id = useSelector(get("session.calendar_id"));
  const [horas, setHoras] = useState([]);

  useEffect(() => {
    async function loadData() {
      const url = `https://afternoon-refuge-46845.herokuapp.com/api/auxiliar/scheduleHours/${calendar_id}`;
      const result = await fetch(url);
      const data = await result.json();
      setHoras(data);
    }
    loadData();
  }, [horas, calendar_id]);

  const eliminarHora = async idHora => {
    console.log(idHora);
    const url = `https://afternoon-refuge-46845.herokuapp.com/api/hours/${idHora}`;
    const result = await fetch(url, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
    const data = await result.json();
    if (data === true) {
    } else {
    }
  };

  const hourList = horas.map((hora, index) => (
    <li key={`itm-${index}`} className="list-group-item">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <button
              className="btn btn-danger"
              onClick={() => eliminarHora(hora.id)}
            >
              <img
                src={require("../../../icons/basurero.png")}
                className="imagen"
                alt="eliminar"
              />
            </button>
          </div>
          <div className="col-9">
            <h5>
              {hora.ini} - {hora.fin}
            </h5>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <button className="back" onClick={() => history.goBack()}>
          <img
            src={require("../../../icons/back.png")}
            className="imagen"
            alt="back"
          />
        </button>
        <a class="navbar-brand">Eliminar Horas</a>
      </nav>

      <div>
        <ul className="list-group">{hourList}</ul>
      </div>
    </div>
  );
};

export default DeleteHours;
