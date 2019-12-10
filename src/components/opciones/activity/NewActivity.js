import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
import "./NewActivity.css";

const NewActivity = ({ history }) => {
  const calendar_id = useSelector(get("session.calendar_id"));
  const [dia, setDia] = useState("");
  const [fecha, setFecha] = useState("");
  const [description, setDescription] = useState("");
  const [hour_id, setHourID] = useState();
  const [type_id, setTypeID] = useState();
  const [visible, setVisible] = useState(false);
  const [activities, setActivities] = useState([]);
  const [hours, setHours] = useState([]);

  useEffect(() => {
    async function loadHour() {
      const url = `https://afternoon-refuge-46845.herokuapp.com/api/auxiliar/scheduleHours/${calendar_id}`;
      const result = await fetch(url);
      const data = await result.json();
      setHourID(data[0].id);
      setHours(data);
    }
    async function loadActivities() {
      const url = `https://afternoon-refuge-46845.herokuapp.com/api/types`;
      const result = await fetch(url);
      const data = await result.json();
      setTypeID(data[0].id);
      setActivities(data);
    }
    loadActivities();
    loadHour();
  }, []);
  const handleSubmit = async () => {
    console.log(fecha);
    console.log(hour_id);
    const url = "https://afternoon-refuge-46845.herokuapp.com/api/activities";
    const result = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        day: dia,
        fecha: fecha,
        description: description,
        hour_id: hour_id,
        type_id: type_id
      })
    });
    const data = await result.json();
    if (data.hour_id === hour_id) {
      history.push(`/settings`);
    } else {
      setVisible(true);
    }
  };
  const hoursList = hours.map((hour, index) => (
    <option key={`op-${index}`} value={hour.id}>
      {`${hour.ini}-${hour.fin}`}
    </option>
  ));
  const typesList = activities.map((activity, index) => (
    <option key={`op-${index}`} value={activity.id}>
      {activity.name}
    </option>
  ));
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
        <a className="navbar-brand">Nueva Actividad</a>
      </nav>

      <section className="newActivitySection">
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <p>Seleccione el dia</p>
          <select
            className="custom-select custom-select-sm"
            value="Lunes"
            onClick={e => setDia(e.target.value)}
            onChange={e => setDia(e.target.value)}
          >
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miercoles">Miercoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sabado">Sabado</option>
            <option value="Domingo">Domingo</option>
          </select>
          <p>Seleccione la fecha</p>
          <input
            type="date"
            name="fecha"
            className="form-control"
            onChange={e => setFecha(e.target.value)}
          />
          <p>Descripcion</p>
          <textarea
            onChange={e => {
              setDescription(e.target.value);
              setVisible(false);
            }}
            placeholder="Descripción..."
            className="inputDescription"
            name="description"
          />
          <p>Selecciones la hora</p>
          <select
            className="custom-select custom-select-sm"
            value={hour_id}
            onClick={e => setHourID(e.target.value)}
            onChange={e => setHourID(e.target.value)}
          >
            {hoursList}
          </select>
          <p>Selecciones la Actividad</p>
          <select
            className="custom-select custom-select-sm"
            value={type_id}
            onClick={e => setTypeID(e.target.value)}
            onChange={e => setTypeID(e.target.value)}
          >
            {typesList}
          </select>
          <button type="submit" className="submit btn btn-success">
            Aceptar
          </button>
          {visible && (
            <div className="alert alert-danger" role="alert">
              No se pudo crear la actividad
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default NewActivity;
