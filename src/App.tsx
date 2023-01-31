import './App.css';
import FrasesAdder from './components/FrasesAdder';
import FrasesList from './components/FrasesList';
import Search from './components/Search';

function App() {
  return (
    <>
      <Search />
      <FrasesAdder />
      <FrasesList />
    </>
  );
}

export default App;
