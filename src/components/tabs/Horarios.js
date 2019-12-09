import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
import "./Horarios.css";
import Footer from "../Footer";
//import { add, exit, book, settings } from "ionicons/icons";
import { userLogin, latestCalendar } from "../../reducer/actionCreators";

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
    history.push(`/login`);
  };
  return (
    <div>
      <div>
        <div>
          <h3>Schedule.mo</h3>
          <button onClick={() => history.push(`/crear-horario`)}>
            {/*<IonIcon icon={add}></IonIcon>*/}
          </button>
          <button onClick={() => history.push(`/settings`)}>
            {/*<IonIcon icon={settings}></IonIcon>/*}
          </button>
          <button  onClick={() => cerrarSesion()}>
            {/*<IonIcon icon={exit}></IonIcon>*/}
          </button>
        </div>
      </div>
      <div>
        <div className="welcome-card">
          <div>
            <h3>{`Comienzo ${user_id} + ${calendar_id}`}</h3>
            <h2>creacion de horario</h2>
          </div>
        </div>
        <p>aqui colocar los horarios</p>
      </div>
      <Footer />
    </div>
  );
};

export default Horario;
