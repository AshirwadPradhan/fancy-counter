import CountButton from "./CountButton";

function ButtonContainer({ setCount, locked }) {
  return (
    <div className="button-container">
      <CountButton locked={locked} type="minus" setCount={setCount} />
      <CountButton locked={locked} type="plus" setCount={setCount} />
    </div>
  );
}

export default ButtonContainer;
