import React, { useState } from "react";

import { useSelector } from "react-redux";
import get from "lodash/fp/get";
//import { arrowRoundBack } from "ionicons/icons";
import Footer from "../../Footer";

const NewHour = ({ history }) => {
  const calendar_id = useSelector(get("session.calendar_id"));
  const [ini, setIni] = useState("00:00");
  const [fin, setFin] = useState("00:00");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async () => {
    const url = "https://afternoon-refuge-46845.herokuapp.com/api/hours";
    const result = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        ini: ini + ":00",
        fin: fin + ":00",
        schedule_id: calendar_id
      })
    });
    const data = await result.json();
    if (data.schedule_id === calendar_id) {
      history.push(`/hour-settings`);
    } else {
      setVisible(true);
    }
  };

  return (
    <div className="page">
      <nav class="navbar navbar-light bg-light">
        <button className="back" onClick={() => history.goBack()}>
          <img
            src={require("../../../icons/back.png")}
            className="imagen"
            alt="back"
          />
        </button>
        <a class="navbar-brand">Nueva Hora</a>
      </nav>

      <section>
        <div className="cuerpo">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <p>Seleccione la Hora Inicial (HH:MM):</p>
            <input
              type="time"
              min="00:00"
              max="23:59"
              value={ini}
              className="form-control form-control-sm"
              onChange={e => setIni(e.target.value)}
            />
            <p>Seleccione la Hora Final (HH:MM):</p>
            <input
              type="time"
              min="00:00"
              max="23:59"
              value={fin}
              className="form-control form-control-sm"
              onChange={e => setFin(e.target.value)}
            />
            <button type="submit" className="submit btn btn-success">
              Aceptar
            </button>
            {visible && (
              <div class="alert alert-danger" role="alert">
                No se pudo crear la Hora
              </div>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewHour;
