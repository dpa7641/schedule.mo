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
import Footer from "../Footer";

const Settings = ({ history }) => {
  const calendar_id = useSelector(get("session.calendar_id"));

  const eliminar = () => {
    console.log("usuario eliminado");
  };

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
          <IonTitle>{`Opciones  + ${calendar_id}`}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/settings">
            <IonLabel>
              <h2>Editar Horario</h2>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/hour-settings">
            <IonLabel>
              <h2>Horas</h2>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/settings">
            <IonLabel>
              <h2>Actividades</h2>
            </IonLabel>
          </IonItem>
          <IonButton onClick={() => eliminar()} color="danger" expand="block">
            <IonLabel>
              <h2>Eliminar Este Horario</h2>
            </IonLabel>
          </IonButton>
        </IonList>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Settings;
