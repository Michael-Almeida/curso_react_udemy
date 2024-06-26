import React from "react";
// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4.Refatorando com hook

import { useCounterContext } from "../hooks/useCounterContext";

// 5. Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5. Contexto mais complexo
  const { color, dispatch } = useTitleColorContext();
  console.log(color);
  // 6. alterando state complexo
  const setTipeColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador {counter}</p>
      {/* 3. alterando valor contexto */}
      <ChangeCounter />
      {/* 6 - alterando contexto complexo */}
      <div>
        <button onClick={() => setTipeColor("RED")}>Vermelho</button>
        <button onClick={() => setTipeColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
