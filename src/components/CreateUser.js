import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin, latestCalendar } from "../reducer/actionCreators";
import "./CreateUser.css";

const CreateUser = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
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
      setVisible(true);
    }
  };
  return (
    <div className="page">
      <header>
        <h5>Schedule.mo</h5>
      </header>
      <section>
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
            <button type="submit" className="submit btn btn-success">
              Crear Cuenta
            </button>
            {visible && (
              <div class="alert alert-danger" role="alert">
                El correo ingresado ya tiene una cuenta
              </div>
            )}
          </form>
          <div className="registro">
            <button
              className="btn btn-primary"
              onClick={() => history.push("/login")}
            >
              Cancelar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CreateUser;
