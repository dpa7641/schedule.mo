import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import get from "lodash/fp/get";
//import { add } from "ionicons/icons";
import { latestCalendar } from "../../reducer/actionCreators";
import "./Calendarios.css";

const Calendarios = props => {
  const [calendarios, setCalendarios] = useState([]);
  const { history } = props;
  const user_id = useSelector(get("session.user_id"));
  const calendar_id = useSelector(get("session.calendar_id"));
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      const url =
        "https://afternoon-refuge-46845.herokuapp.com/api/auxiliar/userSchedules/" +
        user_id;
      const result = await fetch(url);
      const data = await result.json();
      setCalendarios(data);
    }
    loadData();
  }, [calendar_id, user_id]);

  const redirigir = calendar => {
    dispatch(latestCalendar(calendar));
    history.push(`/horarios`);
  };

  const calendarList = calendarios.map((calendar, index) => (
    <button
      key={`btn-${index}`}
      className="btn btn-block btn-primary"
      onClick={() => redirigir(calendar.id)}
    >
      <div>
        <div>
          <h2>{calendar.name}</h2>
          <p>{calendar.description}</p>
        </div>
      </div>
    </button>
  ));

  return (
    <div>
      <div>
        <div className="container header">
          <h2>Lista de Horarios</h2>
          <button
            onClick={() => history.push(`/crear-horario/${user_id}`)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>
        </div>
      </div>
      <div>
        <div>{calendarList}</div>
      </div>
    </div>
  );
};

export default Calendarios;
