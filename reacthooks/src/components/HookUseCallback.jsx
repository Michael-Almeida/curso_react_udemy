import { useCallback, useState } from "react";

//Hook utilizado para memorizar funções

import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFormDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);
  return (
    <div>
      <List getItems={getItemsFormDatabase} />
      <h2>HookUseCallback</h2>
      <button onClick={(e) => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
