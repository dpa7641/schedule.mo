import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { latestCalendar } from "../reducer/actionCreators";
import get from "lodash/fp/get";
import "./CreateSchedule.css";

const CreateSchedule = ({ history }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const user_id = useSelector(get("session.user_id"));

  const handleSubmit = async () => {
    const url = "https://afternoon-refuge-46845.herokuapp.com/api/schedules";
    const result = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        description: description,
        user_id: user_id
      })
    });
    const data = await result.json();
    if (data.user_id === user_id) {
      dispatch(latestCalendar(data.id));
      history.push(`/horarios`);
    } else {
      setVisible(true);
    }
  };

  return (
    <div className="page">
      <nav class="navbar navbar-light bg-light">
        <button className="back" onClick={() => history.goBack()}>
          <img
            src={require("../icons/back.png")}
            className="imagen"
            alt="back"
          />
        </button>
        <a class="navbar-brand">Creación de Horario</a>
      </nav>
      <section>
        <div className="contenido">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <p>Inserte Nombre del nuevo Calendario:</p>
            <input
              onChange={e => {
                setName(e.target.value);
                setVisible(false);
              }}
              type="text"
              placeholder="Nombre Calendario..."
              className="inputName"
              name="name"
              required
            />
            <p>Descripcion (Opcional):</p>
            <textarea
              onChange={e => {
                setDescription(e.target.value);
                setVisible(false);
              }}
              placeholder="Descripción..."
              className="inputDescription"
              name="description"
              cols={40}
              rows={10}
            />
            <button type="submit" className="submit btn btn-success">
              Aceptar
            </button>
            {visible && (
              <div class="alert alert-danger" role="alert">
                No se pudo crear el Horario
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateSchedule;
