import React from "react";

import { IonIcon, IonFooter, IonGrid, IonRow, IonCol } from "@ionic/react";
import "./Footer.css";
import {
  home,
  calendar as calendarIcon,
  share,
  clipboard
} from "ionicons/icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <IonFooter className="footer">
      <IonGrid>
        <IonRow className="fila">
          <Link to="/horarios">
            <IonCol className="columna">
              <IonIcon icon={home} size="large" />
            </IonCol>
          </Link>
          <Link to="/lista-horarios">
            <IonCol className="columna">
              <IonIcon icon={calendarIcon} size="large" />
            </IonCol>
          </Link>
          <Link to="/actividades">
            <IonCol className="columna">
              <IonIcon icon={clipboard} size="large" />
            </IonCol>
          </Link>
          <Link to="/share">
            <IonCol className="columna">
              <IonIcon icon={share} size="large" />
            </IonCol>
          </Link>
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
};
export default Footer;
