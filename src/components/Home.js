import React from "react";
import { Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";

import Horario from "./tabs/Horarios";
import Login from "./Login";
import Calendarios from "./tabs/Calendarios";
import CreateSchedule from "./CreateSchedule";
import Actividades from "./Actividades";
import Share from "./Share";
import CreateUser from "./CreateUser";
import Eventos from "./Eventos";
import Settings from "./opciones/Settings";
import NewHour from "./opciones/hour/NewHour";
import HourSettings from "./opciones/hour/HourSettings";
import DeleteHours from "./opciones/hour/DeleteHours";
const Home = () => {
  return (
    <IonRouterOutlet>
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
    </IonRouterOutlet>
  );
};

export default Home;
