import { KeyboardEvent, useState } from 'react';
import './App.css';

function App() {
  const [nuevaFrase, setNuevaFrase] = useState('');
  const [frases, setFrases] = useState<string[]>([]);
  const [filtro, setFiltro] = useState('');
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };
  const handleAdd = () => {
    if (nuevaFrase.length > 0) {
      setFrases((f) => [...f, nuevaFrase]);
      setNuevaFrase('');
    }
  };
  return (
    <>
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
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Buscar Frase🔍"
          />
        </label>
      </div>

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
            value={nuevaFrase}
            onChange={(e) => setNuevaFrase(e.target.value?.trimStart() ?? '')}
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0px 0px 15px -4px rgba(0,0,0,0.8)',
          '-webkit-box-shadow': '0px 0px 15px -4px rgba(0,0,0,0.8)',
          '-moz-box-shadow': '0px 0px 15px -4px rgba(0,0,0,0.8)',
          borderRadius: '5px',
        }}>
        <h2
          style={{
            width: '80%',
            textAlign: 'center',
            borderBottom: '1px solid black',
          }}>
          Frases
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
          }}>
          {frases
            .filter((f) => f.includes(filtro))
            .map((frase) => (
              <div
                style={{
                  justifySelf: 'auto',
                  minHeight: '2vh',
                  padding: '1.5vh',
                  margin: '5px',
                  boxShadow: '0 0 10px 2px rgba(0, 0, 0, .1)',
                  '-webkit-box-shadow': '0 0 10px -1px rgba(0, 0, 0, .1)',
                  '-moz-box-shadow': '0 0 10px 2px rgba(0, 0, 0, .1)',
                  borderRadius: '10px',
                }}
                key={frase}>
                <span>{frase}</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
