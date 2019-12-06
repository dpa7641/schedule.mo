import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButton,
  IonLabel,
  IonAlert
} from "@ionic/react";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Login.css";
import { userLogin, latestCalendar } from "../reducer/actionCreators";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const url =
      "https://afternoon-refuge-46845.herokuapp.com/api/getuser/" +
      email +
      "/" +
      password;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    if (data.length > 0) {
      dispatch(
        userLogin({
          isLoggedIn: true,
          user_id: data[0].id
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
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="cuerpo">
          <div className="titulos">
            <h5>Bienvenido a Schedule.mo</h5>
            <h2>Iniciar Sesión</h2>
          </div>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="email..."
              className="email"
              name="email"
            />
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="password..."
              className="password"
              name="password"
            />
            <IonButton type="submit" expand="block" className="submit">
              Iniciar Sesión
              <IonAlert
                isOpen={alert}
                onDidDismiss={() => setShowAlert(false)}
                header={"Advertencia"}
                subHeader={"Fallo al verificar datos"}
                message={"Los datos ingresados no cuentan con una cuenta"}
                buttons={["OK"]}
              />
            </IonButton>
          </form>
          <div className="registro">
            <IonLabel className="labelCuenta">
              Usted ya tiene una cuenta en Schedule?
            </IonLabel>
            <IonButton
              expand="block"
              color="secondary"
              onClick={() => history.push(`/crear-usuario`)}
            >
              Crear Cuenta
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
