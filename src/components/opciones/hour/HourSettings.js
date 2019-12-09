import React from "react";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
//import { arrowRoundBack } from "ionicons/icons";
import { Link } from "react-router-dom";
import Footer from "../../Footer";

const HourSettings = ({ history }) => {
  const calendar_id = useSelector(get("session.calendar_id"));

  return (
    <div>
      <div>
        {/*<IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => history.goBack()}>
              <IonIcon icon={arrowRoundBack}></IonIcon>
              <p>Atras</p>
            </IonButton>
          </IonButtons>
          <IonTitle>{`OpcionesHora  + ${calendar_id}`}</IonTitle>
        </IonToolbar>*/}
        <p>colocar boton de retroceso y titulo</p>
      </div>
      <div>
        <div>
          <Link to="/new-hour">
            <h2>Nueva Hora</h2>
          </Link>
          <Link to="/delete-hours">
            <h2>Eliminar Horas</h2>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HourSettings;
