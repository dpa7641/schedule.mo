import React, { Component } from "react";
import { IonApp, IonContent } from "@ionic/react";
import { Route, Redirect } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

//import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonRouterOutlet> */}
        <IonContent>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Home />
        </IonContent>
        {/* </IonRouterOutlet> */}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
