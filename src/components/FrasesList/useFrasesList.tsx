import { useContext } from 'react';
import { FrasesContext } from '../../contexts/FrasesContext';

export function useFrasesList() {
  const { state } = useContext(FrasesContext);
  return {
    show: state.frases.length > 0,
    frases: state.frasesFiltradas,
  };
}
