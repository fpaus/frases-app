type Frase = {
  id: number;
  texto: string;
};

export type FrasesState = {
  frases: Frase[];
  filtro: string;
  frasesFiltradas: Frase[];
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
      const id = state.frases.at(-1) ? state.frases.at(-1)?.id! + 1 : 1;
      const frases = [
        ...state.frases,
        {
          id,
          texto: action.payload.frase,
        },
      ];
      return {
        ...state,
        frases,
        frasesFiltradas: frases.filter(
          (f) => !state.filtro || f.texto.includes(state.filtro),
        ),
      };
    case 'FILTRAR':
      const filtro = action.payload.filtro;
      return {
        ...state,
        filtro,
        frasesFiltradas: state.frases.filter(
          (f) => !filtro || f.texto.includes(filtro),
        ),
      };
  }
}

export default reducer;
