import './FrasesAdder.css';
import { useFrasesAdder } from './useFrasesAdder';

const FrasesAdder = () => {
  const { fraseActual, handleAdd, handleKeyDown, handleOnChange } =
    useFrasesAdder();
  return (
    <div className="container">
      <div>
        <input
          aria-label="adder-input"
          className="input"
          id="cargar-frase"
          value={fraseActual}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          placeholder="Nueva Frase"
        />
        <button
          aria-label="adder-btn"
          type="button"
          className="btn"
          onClick={handleAdd}>
          ➕
        </button>
      </div>
    </div>
  );
};

export default FrasesAdder;
