import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const onSubtract = () => setCount(count - 1);
  const onAdd = () => setCount(count + 1);

  return (
    <div>
      <button onClick={onSubtract}>remove 1</button>
      <h1>{count}</h1>
      <button onClick={onAdd}>add 1</button>
    </div>
  );
}

export default Counter;
