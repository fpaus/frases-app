export type FrasesState = {
  frases: string[];
  filtro: string;
  frasesFiltradas: string[];
};

export type FrasesActionsTypes = 'ADD_FRASE' | 'FILTRAR';
export type FrasesActions =
  | {
      type: 'ADD_FRASE';
      payload: {
        frase: string;
      };
    }
  | {
      type: 'FILTRAR';
      payload: {
        filtro: string;
      };
    };

function reducer(state: FrasesState, action: FrasesActions): FrasesState {
  switch (action.type) {
    case 'ADD_FRASE':
      const frases = [...state.frases, action.payload.frase];
      return {
        ...state,
        frases,
        frasesFiltradas: frases.filter(
          (f) => !state.filtro || f.includes(state.filtro),
        ),
      };
    case 'FILTRAR':
      const filtro = action.payload.filtro;
      return {
        ...state,
        filtro,
        frasesFiltradas: state.frases.filter(
          (f) => !filtro || f.includes(filtro),
        ),
      };
  }
}

export default reducer;
