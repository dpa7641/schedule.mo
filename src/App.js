import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import get from "lodash/fp/get";
import Horario from "./components/tabs/Horarios";
import Login from "./components/Login";
import Calendarios from "./components/tabs/Calendarios";
import CreateSchedule from "./components/CreateSchedule";
import Actividades from "./components/Actividades";
import Share from "./components/Share";
import CreateUser from "./components/CreateUser";
import Eventos from "./components/Eventos";
import Settings from "./components/opciones/Settings";
import NewHour from "./components/opciones/hour/NewHour";
import HourSettings from "./components/opciones/hour/HourSettings";
import DeleteHours from "./components/opciones/hour/DeleteHours";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const user_id = useSelector(get("session.user_id"));
  return (
    <BrowserRouter>
      <Fragment>
        <div className="container-fluid main-content">
          <Route exact path="/" component={Login} />
          <Route path="/horarios" component={Horario} exact={true} />
          <Route path="/lista-horarios" component={Calendarios} exact={true} />
          <Route path="/eventos" component={Eventos} />
          <Route path="/actividades" component={Actividades} />
          <Route path="/share" component={Share} />
          <Route path="/crear-usuario" component={CreateUser} />
          <Route path="/crear-horario" component={CreateSchedule} />
          <Route path="/login" component={Login} />
          <Route path="/settings" component={Settings} />
          <Route path="/hour-settings" component={HourSettings} />
          <Route path="/new-hour" component={NewHour} />
          <Route path="/delete-hours" component={DeleteHours} />
        </div>
        {user_id && <Footer className="footer" />}
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
