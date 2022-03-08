import React from "react";
import "../css/cargando.css";
import pokeball from "../img/pokeball.png"

function Cargando() {
    return (
       
            
        <div className="overlay-loader">
        <div className="loader">
            <img src={pokeball}></img>
        </div>
    </div>
            
  );
}

export default Cargando;
