import Count from "./Count";
import CounterButtons from "./CounterButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

function Card() {
  return (
    <div>
      <Title />
      <Count number={0}/>
      <ResetButton />
      <CounterButtons />
    </div>
  );
}

export default Card;
