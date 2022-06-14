import { useState } from "react";
import { Counter } from "./components/Counter";

export const App = () => {
  const [value, setValue] = useState('Текст в инпуте');

  return (
    <div className="App">
      <h1>Vladys_love</h1>
      <Counter />
    </div>
  );
}
