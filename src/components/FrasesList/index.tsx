import { useFrasesList } from './useFrasesList';

const FrasesList = () => {
  const { show, frases } = useFrasesList();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0px 0px 15px -4px rgba(0,0,0,0.8)',
          '-webkit-box-shadow': '0px 0px 15px -4px rgba(0,0,0,0.8)',
          '-moz-box-shadow': '0px 0px 15px -4px rgba(0,0,0,0.8)',
          borderRadius: '10px',
          minWidth: '85%',
          maxWidth: '1280px',
        }}>
        <h2
          style={{
            width: '80%',
            textAlign: 'center',
            borderBottom: '1px solid black',
          }}>
          Frases
        </h2>
        {show ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              width: '100%',
              paddingBottom: '10px',
            }}>
            {frases.map((frase) => (
              <div
                style={{
                  justifySelf: 'auto',
                  minHeight: '2vh',
                  padding: '1.5vh',
                  margin: '5px 10px',
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
        ) : (
          <p>No hay frases cargadas todavía</p>
        )}
      </div>
    </div>
  );
};

export default FrasesList;
