import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent
} from "@ionic/react";

const Eventos = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>detalles de los eventos faltantes!!!! </p>
        <p>detalles de los eventos faltantes!!!! </p>
      </IonContent>
    </IonPage>
  );
};

export default Eventos;
