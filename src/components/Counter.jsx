import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  }

  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Inrement</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
