import { useState } from "react";

const HookUseState = () => {
  let userName = "João";

  const [name, setName] = useState("Michael");

  const changeNames = () => {
    userName = "João Souza";
    setName("Michael Cardoso");
  };

  // use state e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(age);
  };

  return (
    <div>
      <h2>HookUseState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>
      <hr />
      {/* 2 useState e input */}
      <form onSubmit={handleSubmit}>
        <p>Digite a sua idade</p>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
        <p>Você tem {age} anos!</p>
      </form>
    </div>
  );
};

export default HookUseState;
