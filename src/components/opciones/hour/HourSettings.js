import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
  IonIcon
} from "@ionic/react";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
import { arrowRoundBack } from "ionicons/icons";
import Footer from "../../Footer";

const HourSettings = ({ history }) => {
  const calendar_id = useSelector(get("session.calendar_id"));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => history.goBack()}>
              <IonIcon icon={arrowRoundBack}></IonIcon>
              <IonLabel>Atras</IonLabel>
            </IonButton>
          </IonButtons>
          <IonTitle>{`OpcionesHora  + ${calendar_id}`}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/new-hour">
            <IonLabel>
              <h2>Nueva Hora</h2>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/delete-hours">
            <IonLabel>
              <h2>Eliminar Horas</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default HourSettings;
