import React from "react";
import HookUseState from "../components/HookUseState";
import HookuseReducer from "../components/HookuseReducer";
import HookUseEffect from "../components/HookUseEffect";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";

const Home = () => {
  return (
    <div>
      <div>
        <HookUseState />
        <HookuseReducer />
        <HookUseEffect />
        <HookUseRef />
        <HookUseCallback />
        <HookUseMemo />
      </div>
    </div>
  );
};

export default Home;
