import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Login.css";
import { userLogin, latestCalendar } from "../reducer/actionCreators";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [alert, setShowAlert] = useState(false);
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
      //setShowAlert(true);
    }
  };
  return (
    <div className="page">
      <header>
        <h5>Login</h5>
      </header>
      <section>
        <div className="cuerpo">
          <div className="titulos">
            <h5>Bienvenido a Schedule.mo</h5>
            <h2>Iniciar Sesión</h2>
          </div>
          <form
            className="container"
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
            <button
              type="submit"
              expand="block"
              className="submit btn btn-primary"
            >
              Iniciar Sesión
            </button>
            <button
              expand="block"
              color="secondary"
              className="btn btn-outline-primary"
              onClick={() => history.push(`/crear-usuario`)}
            >
              Crear Cuenta
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
