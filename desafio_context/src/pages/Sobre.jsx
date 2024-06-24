import React from "react";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Sobre = () => {
  const { counter } = useCounterContext();
  // 5. Contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Sobre</h1>
      <p>Valor do contador {counter}</p>
      <div>
        <button onClick={() => dispatch({ type: "RED" })}>Vermelho</button>
        <button onClick={() => dispatch({ type: "BLUE" })}>Azu</button>
      </div>
    </div>
  );
};

export default Sobre;
