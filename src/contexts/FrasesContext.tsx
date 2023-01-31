import { createContext } from 'react';
import { type FrasesActions, type FrasesState } from './frasesReducer';
import { useFrasesReducer } from './useFrasesReducer';
type FrasesContextType = {
  state: FrasesState;
  dispatch: React.Dispatch<FrasesActions>;
};

const initialState: FrasesContextType = {
  state: {
    frases: [],
    filtro: '',
    frasesFiltradas: [],
  },
  dispatch: () => {},
};

export const FrasesContext = createContext<FrasesContextType>(initialState);

export const FrasesContextProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const { state, dispatch } = useFrasesReducer();
  return (
    <FrasesContext.Provider value={{ state, dispatch }}>
      {children}
    </FrasesContext.Provider>
  );
};
