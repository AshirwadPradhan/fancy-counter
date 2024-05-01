import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButton({ type, setCount, locked }) {
  const handleClick = (e) => {
    setCount((prev) => {
      if (type === "plus") {
        if (prev + 1 > 5) {
          return 5;
        }
        return prev + 1;
      } else {
        if (prev - 1 < 0) {
          return 0;
        }
        return prev - 1;
      }
    });
    e.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
    </button>
  );
}

export default CountButton;
