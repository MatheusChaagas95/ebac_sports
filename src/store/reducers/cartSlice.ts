import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../../App';

type CartState = {
  itens: Produto[];
  favoritos: Produto[];
};

const initialState: CartState = {
  itens: [],
  favoritos: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state: CartState, action: PayloadAction<Produto>) => {
      if (!state.itens.find(item => item.id === action.payload.id)) {
        state.itens.push(action.payload);
      }
    },
    removerDoCarrinho: (state: CartState, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(item => item.id !== action.payload);
    },
    adicionarAoFavorito: (state: CartState, action: PayloadAction<Produto>) => {
      if (!state.favoritos.find(item => item.id === action.payload.id)) {
        state.favoritos.push(action.payload);
      }
    },
    removerDoFavorito: (state: CartState, action: PayloadAction<number>) => {
      state.favoritos = state.favoritos.filter(item => item.id !== action.payload);
    },
  },
});

export const { adicionarAoCarrinho, removerDoCarrinho, adicionarAoFavorito, removerDoFavorito } = cartSlice.actions;

export default cartSlice.reducer;
