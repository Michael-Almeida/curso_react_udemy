import { useState, useEffect, useMemo } from "react";

//Hook utilizado para memorizar valores

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("premium number alterado");
  }, [premiumNumbers]);
  return (
    <div>
      <h2>HookUseMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? (
        <p>Parabéns, acertou o premium number</p>
      ) : (
        ""
      )}
      <hr />
    </div>
  );
};

export default HookUseMemo;
