import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useContext,
  useState,
} from 'react';
import { FrasesContext } from '../../contexts/FrasesContext';

export function useFrasesAdder() {
  const [fraseActual, setFraseActual] = useState('');
  const { dispatch } = useContext(FrasesContext);
  const handleAdd = useCallback(() => {
    console.log(fraseActual);
    if (fraseActual.length > 0) {
      dispatch({
        type: 'ADD_FRASE',
        payload: {
          frase: fraseActual,
        },
      });
      setFraseActual('');
    }
  }, []);
  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log({
      value: e.target.value,
      trim: e.target.value?.trimStart() ?? '',
    });
    setFraseActual(e.target.value?.trimStart() ?? '');
  }, []);
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  }, []);
  return {
    fraseActual,
    handleAdd,
    handleKeyDown,
    handleOnChange,
  };
}
