import { useState, useRef, useEffect } from "react";

/* Hook utilizado para acessar diretamente elementos do DOM ou armazenar valores mutáveis
que não causam re-renderização do componente quando alterado
 */
const HookUseReff = () => {
  // 1 - useRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // 2- useReff com DOM
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setText("");

    inputRef.current.focus();
  };
  return (
    <div>
      <h2>HookUseReff</h2>
      <p>O componente renderizou: {numberRef.current} vezes</p>
      <p>Counter 1:{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="Submit" value="enviar" />
      </form>
      <hr />
    </div>
  );
};

export default HookUseReff;
