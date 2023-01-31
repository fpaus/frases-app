import { ChangeEvent, useCallback, useContext } from 'react';
import { FrasesContext } from '../../contexts/FrasesContext';

export function useSearch() {
  const { state, dispatch } = useContext(FrasesContext);
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'FILTRAR',
      payload: {
        filtro: e.target.value,
      },
    });
  }, []);
  return {
    handleChange,
    filtro: state.filtro,
    show: state.frases.length > 0,
  };
}
