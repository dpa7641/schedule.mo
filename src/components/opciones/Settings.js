import React from "react";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
//import { arrowRoundBack } from "ionicons/icons";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Settings = ({ history }) => {
  const calendar_id = useSelector(get("session.calendar_id"));

  const eliminar = () => {
    console.log("usuario eliminado");
  };

  return (
    <div>
      <div>
        <div>
          {/*<IonButtons slot="start">
            <button onClick={() => history.goBack()}>
              <IonIcon icon={arrowRoundBack}></IonIcon>
              <p>Atras</p>
            </button>
          </IonButtons>*/}
          {/*colocar boton de retroceso*/}
          <p>{`Opciones  + ${calendar_id}`}</p>
        </div>
      </div>
      <div>
        <div>
          <Link to="/settings">
            <p>
              <h2>Editar Horario</h2>
            </p>
          </Link>
          <Link to="/hour-settings">
            <p>
              <h2>Horas</h2>
            </p>
          </Link>
          <Link to="/settings">
            <p>
              <h2>Actividades</h2>
            </p>
          </Link>
          <button onClick={() => eliminar()}>
            <p>
              <h2>Eliminar Este Horario</h2>
            </p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
