import './FrasesList.css';
import { useFrasesList } from './useFrasesList';
import ViewFrase from './ViewFrase';

const FrasesList = () => {
  const { show, frases } = useFrasesList();
  return (
    <div className="container">
      <div className="box">
        <h2 className="title">Frases</h2>
        {show ? (
          <div className="frases-container">
            {frases.map((frase) => (
              <ViewFrase texto={frase.texto} key={frase.id} />
            ))}
          </div>
        ) : (
          <span>No hay frases cargadas todavía</span>
        )}
      </div>
    </div>
  );
};

export default FrasesList;
