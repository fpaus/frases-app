import { useSearch } from './useSearch';

const Search = () => {
  const { filtro, handleChange, show } = useSearch();
  return show ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '25px',
      }}>
      <label>
        <input
          style={{
            fontSize: '1.1rem',
            padding: '10px 13px',
            display: 'inline-block',
            borderRadius: '35px',
            textAlign: 'center',
            width: '350px',
          }}
          id="filtro"
          value={filtro}
          onChange={handleChange}
          placeholder="Buscar Frase🔍"
        />
      </label>
    </div>
  ) : (
    <></>
  );
};

export default Search;
