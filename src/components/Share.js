import React from "react";
//import { expand, contract } from "ionicons/icons";
import "./Share.css";

const Share = ({ history }) => {
  return (
    <div>
      <div>
        <div>
          <p>Compartir Horario</p>
        </div>
      </div>
      <div>
        <div className="cuerpo">
          <button onClick={() => history.push(`/share`)} className="btn">
            {/*<icon icon={contract} />*/}
            Compartir Horario
          </button>
          <button onClick={() => history.push(`/share`)} className="btn">
            {/*<icon icon={expand} />*/}
            Copiar Horario
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
