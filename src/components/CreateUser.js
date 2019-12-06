import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButton,
  IonAlert
} from "@ionic/react";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin, latestCalendar } from "../reducer/actionCreators";
import "./CreateUser.css";

const CreateUser = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [alert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const url = "https://afternoon-refuge-46845.herokuapp.com/api/users";
    const result = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    });
    const data = await result.json();
    if (data.email === email) {
      dispatch(
        userLogin({
          isLoggedIn: true,
          user_id: data.id
        })
      );
      dispatch(latestCalendar(0));
      history.push(`/horarios`);
    } else {
      setShowAlert(true);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Crear Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="cuerpo">
          <div className="titulos">
            <h5>Pagina de creación de usuario</h5>
            <h2>Crear Usuario</h2>
          </div>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="nombre..."
              className="inputForm"
              name="name"
              required
            ></input>
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="email..."
              className="inputForm"
              name="email"
              required
            ></input>
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="password..."
              className="inputForm"
              name="password"
              required
            ></input>
            <IonButton type="submit" expand="block" className="submit">
              Crear Cuenta
            </IonButton>
            <IonAlert
              isOpen={alert}
              onDidDismiss={() => setShowAlert(false)}
              header={"Advertencia"}
              subHeader={"Correo Existente"}
              message={"El correo ingresado ya esta ligado a una cuenta"}
              buttons={["OK"]}
            />
          </form>
          <div className="registro">
            <IonButton
              expand="block"
              color="secondary"
              onClick={() => history.push("/login")}
            >
              Cancelar
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default CreateUser;
