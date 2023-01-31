import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react';
import { FrasesContext } from '../../contexts/FrasesContext';

export function useFrasesAdder() {
  const [fraseActual, setFraseActual] = useState('');
  const { dispatch } = useContext(FrasesContext);
  const handleAdd = () => {
    if (fraseActual.length > 0) {
      dispatch({
        type: 'ADD_FRASE',
        payload: {
          frase: fraseActual,
        },
      });
      setFraseActual('');
    }
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFraseActual(e.target.value?.trimStart() ?? '');
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  return {
    fraseActual,
    handleAdd,
    handleKeyDown,
    handleOnChange,
  };
}
