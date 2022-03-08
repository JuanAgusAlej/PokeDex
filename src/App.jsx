import React, {  useState } from "react";
import CardPokemon from "./components/CardPokemon";
import Cargando from "./components/Cargando";
import SelectorGeneracion from "./components/SelectorGeneracion";



export const App = () => {
  const [generacion, setGeneracion] = useState({
    ubicacion: 0,
    datos: [null,151,251,386,493,649,721,809,898],
  });
  

  // const options = [
  //   {value: 0, label: 'Elige una opcion'},
  //   { value: 1, label: 'Primera' },
  //   { value: 2, label: 'Segunda' },
  //   { value: 3, label: 'Tercera' },
  //   { value: 4, label: 'Cuarta' },
  //   { value: 5, label: 'Quinta' },
  //   { value: 6, label: 'Sexta' },
  //   { value: 7, label: 'Septima'},
  //   { value: 8, label: 'Octava' }

  // ]

 

  // const generarOpciones = (opcion) => {
  //   if (0 === opcion.value) {
  //    return <option key={opcion.value} onClick={() => elegirgeneracion(opcion.value)} value={opcion.value}>{opcion.label}</option>
  //   } else {
  //     return <option key={opcion.value} onClick={() => elegirgeneracion(opcion.value)} value={opcion.value}>{opcion.label}</option>
  //   }

  // }

  // const elegirgeneracion = (i) => {
    
  //   setGeneracion({
  //     ubicacion: i,
  //     datos : [...generacion.datos]
  //   }
  //   )

  // }

  return (
    <div className="container">
      {/* <div className="row sticky-top bg-light text-dark ">
        <div className="col-12 col-md-6 offset-md-2 d-flex my-4">
          <h1 className="mx-5">Pokedex</h1>
          <select
            className="form-select col-12 col-md-6 offset-md-1"
            id="generaciones"
            aria-label="Default select example" apel
          >
            {options.map((opcion) => (
               generarOpciones(opcion)
            ))
            }
        </select>

          
        </div>
      </div> */}
      <SelectorGeneracion
        setGeneracion={setGeneracion}
        generacion={generacion}
      />
      {!generacion.ubicacion ? (
        <Cargando />
      ) : (
          <CardPokemon ubicacion={generacion.ubicacion}
          datos={generacion.datos}
          />
      )}
    </div>
  );
};