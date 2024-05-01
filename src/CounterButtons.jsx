import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CounterButtons() {
  return (
    <div className="button-container">
      <button className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn">
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}

export default CounterButtons;
