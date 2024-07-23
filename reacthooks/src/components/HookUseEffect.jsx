import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // Sem array de dependência - sempre executa
  useEffect(() => {
    console.log("estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  //   Array dependencias vazio - executa uma vez só
  useEffect(() => {
    console.log("Serei executado somente uma vez");
  }, []);

  //   Com array de dependência = executa sempre que acontecer algo previsto

  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Executado apenas quando o anotherNumber muda");
    }
  }, [anotherNumber]);

  //   Cleanup useEffect

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("Hello World");
    //   setAnotherNumber(anotherNumber + 1);
    // }, 2000);
    // return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Another Number {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
