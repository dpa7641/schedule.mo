import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel
} from "@ionic/react";

import Footer from "./Footer";

const Actividades = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>lista de actividades</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/eventos">
            <IonLabel>
              <h2>detalles</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Actividades;
