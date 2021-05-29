import React from "react";
import { Counter } from "./components/Counter";
import Usuario from "./components/Usuario";

function App() {
  return (
    <div className="App">
      <h1>hola mundo - TS</h1>
      <hr/>
      <Counter/>

      <Usuario/>
    </div>
  );
}

export default App;
