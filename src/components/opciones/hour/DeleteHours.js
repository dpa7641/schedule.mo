import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
//import { arrowRoundBack, trash } from "ionicons/icons";

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
    <div key={`itm-${index}`}>
      <button to onClick={() => eliminarHora(hora.id)}>
        {/*<IonIcon icon={trash}></IonIcon>*/}
        <p>eliminar</p>
      </button>
      <h3>
        {hora.ini} - {hora.fin}
      </h3>
    </div>
  ));
  return (
    <div>
      <div>
        <div>
          {/* <IonButtons slot="start"> */}
          <button onClick={() => history.goBack()} slot="end">
            Atras
          </button>
          {/* </IonButtons> */}
          <p>poner boton de retroceso</p>
          <p>Eliminar Hora</p>
        </div>
      </div>
      <div>
        <div>{hourList}</div>
        {/*<IonAlert
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
        />*/}
      </div>
    </div>
  );
};

export default DeleteHours;
