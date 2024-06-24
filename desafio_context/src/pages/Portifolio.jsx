import React from "react";

import { useCounterContext } from "../hooks/useCounterContext";

const Portifolio = () => {
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Portifolio</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Portifolio;
