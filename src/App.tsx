import React from "react";
import { Counter } from "./components/Counter";
import {TimerPadre} from "./components/TimerPadre";
import Usuario from "./components/Usuario";

function App() {
  return (
    <div className="App">
      <h1>hola mundo - TS</h1>
      <hr/>
      <Counter/>

      <Usuario/>

      <h2>useEffect - useRef</h2>
      <hr/>

      <TimerPadre/>
    </div>
  );
}

export default App;
