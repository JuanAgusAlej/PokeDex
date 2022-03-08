import React from "react";

function SelectorGeneracion(props) {
  const { setGeneracion, generacion } = props;

  const options = [
    { value: 1, label: "Primera" },
    { value: 2, label: "Segunda" },
    { value: 3, label: "Tercera" },
    { value: 4, label: "Cuarta" },
    { value: 5, label: "Quinta" },
    { value: 6, label: "Sexta" },
    { value: 7, label: "Septima" },
    { value: 8, label: "Octava" },
  ];

 

  const handleChange = (e) => {
    setGeneracion({
      ubicacion: e.target.value,
      datos: [...generacion.datos],
    });
  };

  return (
    <div className="row sticky-top bg-light text-dark ">
      <div className="col-12 col-md-6 offset-md-2 d-flex my-4">
        <h1 className="mx-5">Pokedex</h1>
        <select
          className="form-select "
          id="generaciones"
          aria-label="Default select example"
          onChange={handleChange}
          
        >
          <option
          disabled selected
        >
          Elige una opcion
        </option>
          {options.map((item) => (
            <option key={item.value}
              value={item.value}>
              {item.label}
            
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectorGeneracion;
