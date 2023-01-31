import './FrasesAdder.css';
import { useFrasesAdder } from './useFrasesAdder';

const FrasesAdder = () => {
  const { fraseActual, handleAdd, handleKeyDown, handleOnChange } =
    useFrasesAdder();
  return (
    <div className="container">
      <div>
        <input
          className="input"
          id="cargar-frase"
          value={fraseActual}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          placeholder="Nueva Frase"
        />
        <button type="button" className="btn" onClick={handleAdd}>
          ➕
        </button>
      </div>
    </div>
  );
};

export default FrasesAdder;
