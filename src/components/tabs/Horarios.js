import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonSegment,
  IonSegmentButton
} from "@ionic/react";

import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
import "./Horarios.css";
import Footer from "../Footer";
import { add, exit, book, settings } from "ionicons/icons";
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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Schedule.mo</IonTitle>
          <IonButton
            color="light"
            slot="end"
            onClick={() => history.push(`/crear-horario`)}
          >
            <IonIcon icon={add}></IonIcon>
          </IonButton>
          <IonButton
            color="light"
            slot="end"
            onClick={() => history.push(`/settings`)}
          >
            <IonIcon icon={settings}></IonIcon>
          </IonButton>
          <IonButton color="danger" slot="end" onClick={() => cerrarSesion()}>
            <IonIcon icon={exit}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardSubtitle>{`Comienzo ${user_id} + ${calendar_id}`}</IonCardSubtitle>
            <IonCardTitle>creacion de horario</IonCardTitle>
          </IonCardHeader>
          <IonSegment scrollable>
            <IonSegmentButton onIonSelect={() => console.log("Todos")}>
              <IonLabel>Todos</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton onIonSelect={() => console.log("lunes")}>
              <IonLabel>Lunes</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton onIonSelect={() => console.log("Martes")}>
              <IonLabel>Martes</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton onIonSelect={() => console.log("Miercoles")}>
              <IonLabel>Miercoles</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton onIonSelect={() => console.log("Juves")}>
              <IonLabel>Jueves</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton onIonSelect={() => console.log("Viernes")}>
              <IonLabel>Viernes</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton onIonSelect={() => console.log("Sbado")}>
              <IonLabel>Sabado</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton onIonSelect={() => console.log("Domingo")}>
              <IonLabel>Domingo</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Eventos</IonLabel>
          </IonListHeader>
          <IonItem href="#" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Lista de Eventos Pendientes</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Horario;
