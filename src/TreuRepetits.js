// import React, { useState } from "react";

export default function TreuRepetits({ setArrayNumeros }) {
  // const [arrayNumeros, setArrayNumeros] = useState("");

  const realizarProceso = () => {
    setArrayNumeros((numerosOriginals) => {
      const copiaDelsNumeros = [...numerosOriginals];
      let total = copiaDelsNumeros.length;
      let arrayResultado = [];
      if (total > 2) {
        const dataArr = new Set(copiaDelsNumeros);
        arrayResultado = [...dataArr];
        console.log(arrayResultado);
      }
      return arrayResultado;
    });
  };

  return (
    <>
      <button className="btn btn-primary" onClick={realizarProceso}>
        Realizar el Proceso
      </button>
    </>
  );
}
