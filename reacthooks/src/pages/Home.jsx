import React from "react";
import HookUseState from "../components/HookUseState";
import HookuseReducer from "../components/HookuseReducer";
import HookUseEffect from "../components/HookUseEffect";

const Home = () => {
  return (
    <div>
      <div>
        <HookUseState />
        <HookuseReducer />
        <HookUseEffect />
      </div>
    </div>
  );
};

export default Home;
