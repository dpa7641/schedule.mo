import React, { useEffect, useState } from "react";
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
  IonList,
  IonItem,
  IonAlert
} from "@ionic/react";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
import { arrowRoundBack, trash } from "ionicons/icons";
import Footer from "../../Footer";

const DeleteHours = ({ history }) => {
  const calendar_id = useSelector(get("session.calendar_id"));
  const [horas, setHoras] = useState([]);
  const [alert, setShowAlert] = useState(false);
  const [alert2, setShowAlert2] = useState(false);

  useEffect(() => {
    async function loadData() {
      const url = `https://afternoon-refuge-46845.herokuapp.com/api/auxiliar/scheduleHours/${calendar_id}`;
      const result = await fetch(url);
      const data = await result.json();
      setHoras(data);
    }
    loadData();
  }, [horas, calendar_id]);

  const eliminarHora = async idHora => {
    const url = `https://afternoon-refuge-46845.herokuapp.com/api/hours/${idHora}`;
    const result = await fetch(url, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
    const data = await result.json();
    if (data === true) {
      setShowAlert2(true);
    } else {
      setShowAlert(true);
    }
  };

  const hourList = horas.map((hora, index) => (
    <IonItem key={`itm-${index}`}>
      <IonButton
        color="danger"
        slot="start"
        size="default"
        onClick={() => eliminarHora(hora.id)}
      >
        <IonIcon icon={trash}></IonIcon>
      </IonButton>
      <h3>
        {hora.ini} - {hora.fin}
      </h3>
    </IonItem>
  ));
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => history.goBack()} slot="end">
              <IonIcon icon={arrowRoundBack}></IonIcon>
              <IonLabel>Atras</IonLabel>
            </IonButton>
          </IonButtons>
          <IonTitle>Eliminar Hora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        scrollEvents={true}
        onIonScrollStart={() => {}}
        onIonScroll={() => {}}
        onIonScrollEnd={() => {}}
      >
        <IonList>{hourList}</IonList>
        <IonAlert
          isOpen={alert}
          onDidDismiss={() => setShowAlert(false)}
          header={"Advertencia"}
          subHeader={"Fallo en la eliminación"}
          message={"no se pudo eliminar la hora seleccionada"}
          buttons={["OK"]}
        />
        <IonAlert
          isOpen={alert2}
          onDidDismiss={() => setShowAlert2(false)}
          header={"Eliminacion"}
          subHeader={"correcta"}
          message={"Se elimino la hora especificada"}
          buttons={["OK"]}
        />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default DeleteHours;
