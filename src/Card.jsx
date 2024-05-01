import { useState } from "react";
import Count from "./Count";
import CounterButtons from "./CounterButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CounterButtons setCount={setCount} />
    </div>
  );
}

export default Card;
