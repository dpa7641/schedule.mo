import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon
} from "@ionic/react";
import { expand, contract } from "ionicons/icons";
import Footer from "./Footer";
import "./Share.css";

const Share = ({ history }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Compartir Horario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="cuerpo">
          <IonButton
            color="primary"
            expand="block"
            onClick={() => history.push(`/share`)}
            className="btn"
          >
            <IonIcon icon={contract}> </IonIcon>
            Compartir Horario
          </IonButton>
          <IonButton
            color="secondary"
            expand="block"
            onClick={() => history.push(`/share`)}
            className="btn"
          >
            <IonIcon icon={expand}> </IonIcon>
            Copiar Horario
          </IonButton>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Share;
