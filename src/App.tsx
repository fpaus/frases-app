import './App.css';
import FrasesAdder from './components/FrasesAdder';
import FrasesList from './components/FrasesList';
import Search from './components/Search';
import { FrasesContextProvider } from './contexts/FrasesContext';

function App() {
  return (
    <FrasesContextProvider>
      <Search />
      <FrasesAdder />
      <FrasesList />
    </FrasesContextProvider>
  );
}

export default App;
