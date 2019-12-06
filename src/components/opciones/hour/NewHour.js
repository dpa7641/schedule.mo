import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonLabel,
  IonButton,
  IonButtons,
  IonIcon,
  IonAlert,
  IonDatetime
} from "@ionic/react";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
import { arrowRoundBack } from "ionicons/icons";
import Footer from "../../Footer";

const NewHour = ({ history }) => {
  const calendar_id = useSelector(get("session.calendar_id"));
  const [ini, setIni] = useState("00:00:00");
  const [fin, setFin] = useState("00:00:00");
  const [alert, setShowAlert] = useState(false);

  const handleSubmit = async () => {
    const url = "https://afternoon-refuge-46845.herokuapp.com/api/hours";
    const result = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        ini: ini,
        fin: fin,
        schedule_id: calendar_id
      })
    });
    const data = await result.json();
    if (data.schedule_id === calendar_id) {
      history.push(`/hour-settings`);
    } else {
      setShowAlert(true);
    }
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
          <IonTitle>OpcionesHora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="cuerpo">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <IonLabel>Seleccione la Hora Inicial (HH:MM:SS):</IonLabel>
            <IonDatetime
              displayFormat="HH:mm:ss"
              value={ini}
              onIonChange={e => setIni(e.target.value)}
            />
            <IonLabel>Seleccione la Hora Final (HH:MM:SS):</IonLabel>
            <IonDatetime
              displayFormat="HH:mm:ss"
              value={fin}
              onIonChange={e => setFin(e.target.value)}
            />
            <IonButton type="submit" expand="block" className="submit">
              Aceptar
            </IonButton>
            <IonAlert
              isOpen={alert}
              onDidDismiss={() => setShowAlert(false)}
              header={"Advertencia"}
              subHeader={"Fallo en el guardado"}
              message={"no se pudo guardar la hora en este calendario"}
              buttons={["OK"]}
            />
          </form>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default NewHour;
