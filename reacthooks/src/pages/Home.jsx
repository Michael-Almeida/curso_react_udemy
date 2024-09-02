import React from "react";
import HookUseState from "../components/HookUseState";
import HookuseReducer from "../components/HookuseReducer";
import HookUseEffect from "../components/HookUseEffect";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookCustom from "../components/HookCustom";

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
        <HookUseLayoutEffect />
        <HookUseImperativeHandle />
        <HookCustom />
      </div>
    </div>
  );
};

export default Home;
