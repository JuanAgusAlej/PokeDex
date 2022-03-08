import React, {  useState } from "react";
import CardPokemon from "./components/CardPokemon";
import Cargando from "./components/Cargando";
import SelectorGeneracion from "./components/SelectorGeneracion";



export const App = () => {
  const [generacion, setGeneracion] = useState({
    ubicacion: 0,
    datos: [null,151,251,386,493,649,721,809,898],
  });
  
  return (
    <div className="container">
      
      <SelectorGeneracion
        setGeneracion={setGeneracion}
        generacion={generacion}
      />
      {generacion.ubicacion ===0 ? (
        <Cargando />
      ) : (
          <CardPokemon ubicacion={generacion.ubicacion}
          datos={generacion.datos}
          />
      )}
    </div>
  );
};