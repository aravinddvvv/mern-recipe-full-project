import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  productList: [],
  cartItem: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      console.log(action);
      state.productList = [...action.payload];
    },
    addCartItem: (state, action) => {
      console.log(action);
      const total = action.payload.price;
      state.cartItem = [...state.cartItem, { ...action.payload, qty: 1, total: total }];
    },
    deleteCartItem: (state, action) => {
      console.log(action.payload);
      const deletedItem = state.cartItem.find(item => item._id === action.payload);
      toast.success(`${deletedItem.name} has been removed`);
      
      const index = state.cartItem.findIndex(el => el._id === action.payload);
      state.cartItem.splice(index, 1);
      console.log(index);
    }
  }
});

export const { setDataProduct, addCartItem, deleteCartItem } = productSlice.actions;
export default productSlice.reducer;
