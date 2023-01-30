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
    <div className="App">
      <label>
        Nueva frase:
        <input
          id="cargar-frase"
          value={nuevaFrase}
          onChange={(e) => setNuevaFrase(e.target.value?.trim() ?? '')}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button onClick={handleAdd}>Agregar Frase</button>

      <label>
        Filtro:
        <input
          id="filtro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </label>

      <div>
        {frases
          .filter((f) => f.includes(filtro))
          .map((frase) => (
            <div key={frase}>{frase}</div>
          ))}
      </div>
    </div>
  );
}

export default App;
