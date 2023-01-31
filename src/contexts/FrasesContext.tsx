import { createContext, useReducer } from 'react';
import frasesReducer, {
  type FrasesActions,
  type FrasesState,
} from './frasesReducer';
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
  const [state, dispatch] = useReducer(frasesReducer, initialState.state);
  console.log(state);
  return (
    <FrasesContext.Provider value={{ state, dispatch }}>
      {children}
    </FrasesContext.Provider>
  );
};
