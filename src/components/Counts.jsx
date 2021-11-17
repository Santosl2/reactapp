import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
     
    setCounter(counter+1);
  }

  return (
    <div>
      <h4>{counter}</h4>
      <button type="button" onClick={increment}>
        Clickffds
      </button>
    </div>
  );
}
