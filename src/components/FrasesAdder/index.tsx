import { useFrasesAdder } from './useFrasesAdder';

const FrasesAdder = () => {
  const { fraseActual, handleAdd, handleKeyDown, handleOnChange } =
    useFrasesAdder();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '25px',
      }}>
      <div>
        <input
          style={{
            boxShadow: 'box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1)',
            padding: '15px 13px',
            width: '300px',
            borderRadius: '20px',
          }}
          id="cargar-frase"
          value={fraseActual}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          placeholder="Nueva Frase"
        />
        <button
          type="button"
          style={{
            border: 'none',
            width: '60px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 200ms ease-in',
            cursor: 'pointer',
            padding: '10px',
            boxShadow: '0 0 10px 2px rgba(0, 0, 0, .1)',
            marginLeft: '-65px',
            borderRadius: '9999px',
          }}
          onClick={handleAdd}>
          ➕
        </button>
      </div>
    </div>
  );
};

export default FrasesAdder;
