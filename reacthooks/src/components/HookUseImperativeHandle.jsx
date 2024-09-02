import { useRef } from "react";
import SomeComponent from "./SomeComponent";
/* Possibilita acionar em outro componente de forma imperativa (de cima para baixo)
- não é possível passar ref como props , usa-se a função fowardRef */
const HookUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>HookUseImperativeHandle</h2>

      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>validate</button>
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;
