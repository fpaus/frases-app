import { useReducer } from 'react';
import frasesReducer from './frasesReducer';

export function useFrasesReducer() {
  const [state, dispatch] = useReducer(frasesReducer, {
    frases: [],
    filtro: '',
    frasesFiltradas: [],
  });
  return { state, dispatch };
}
