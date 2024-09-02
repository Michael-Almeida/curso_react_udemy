import { useLayoutEffect, useEffect, useState } from "react";

//é um Hook síncrono onde a ideia é executar algo antes de renderizar o componente, é sempre invocado primeiro

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome qualquer");

  useEffect(() => {
    console.log("2");
    setName("Mudou de nome");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Outro nome");
  });

  console.log(name);
  return (
    <div>
      <h2>HookUseLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
