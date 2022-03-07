import React, {  useState } from "react";
import CardPokemon from "./components/CardPokemon";



export const App = () => {
  const [generacion, setGeneracion] = useState({
    ubicacion: 0,
    datos: [null,151,251,386,493,649,721,809,898],
  });
  

  const options = [
    {value: 0, label: 'Elige una opcion'},
    { value: 1, label: 'Primera' },
    { value: 2, label: 'Segunda' },
    { value: 3, label: 'Tercera' },
    { value: 4, label: 'Cuarta' },
    { value: 5, label: 'Quinta' },
    { value: 6, label: 'Sexta' },
    { value: 7, label: 'Septima'},
    { value: 8, label: 'Octava' }

  ]

  // let primeraGeneracionFin = 151;
  // let segundaaGeneracionFin = 251;
  // let terceraGeneracionFin = 386;
  // let cuartaGeneracionFin = 493;
  // let quintaGeneracionFin = 649;
  // let sextaGeneracionFin = 721;
  // let septimaGeneracionFin = 809;
  // let octavaGeneracionFin = 898;

  // useEffect(() => {
  //   // obtenerPokemones();
  //   pokedexApi(
  //     segundaaGeneracionFin,
  //     terceraGeneracionFin - segundaaGeneracionFin
  //   ).then((respuesta) => {
  //     setPokedex({
  //       loading: false,
  //       datos: respuesta,
  //     });
  //   });
  // }, []);

  const generarOpciones = (opcion) => {
    if (0 === opcion.value) {
     return <option key={opcion.value} onClick={() => elegirgeneracion(opcion.value)} value={opcion.value}>{opcion.label}</option>
    } else {
      return <option key={opcion.value} onClick={() => elegirgeneracion(opcion.value)} value={opcion.value}>{opcion.label}</option>
    }

  }

  const elegirgeneracion = (i) => {
    
    //console.log(generacion)
    setGeneracion({
      ubicacion: i,
      datos : [...generacion.datos]
    }
    )
   // console.log(generacion)

  }

  return (
    <div className="container">
      <div className="row sticky-top bg-light text-dark ">
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
      </div>
      {/* {console.log(generacion)} */}
      {!generacion.ubicacion ? (
        <h3>Elige una opcion...</h3>
      ) : (
          <CardPokemon ubicacion={generacion.ubicacion}
          datos={generacion.datos}
          />
      )}
    </div>
  );
};