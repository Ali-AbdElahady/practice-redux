import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalAmount: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
    } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
    }
    state.totalAmount++
    },
    removeItemfromCart(state, action) {
      const id = action.payload;
      console.log(id);
      const indexOfExistingItem = state.items.findIndex(
        (item) => item.itemId === id
      );
      const existingItem = state.items.find(
        (item) => item.itemId === id
      );
      if (existingItem.quantity > 1) {
        state.items[indexOfExistingItem].quantity--
        state.items[indexOfExistingItem].totalPrice =
          state.items[indexOfExistingItem].totalPrice -
          state.items[indexOfExistingItem].price;
    } else {
        state.items = state.items.filter((item) =>{console.log("object");return item.itemId !== id;});
    }
    state.totalAmount--
    },
  },
  }
);


export default cartSlice;
export const cartActions = cartSlice.actions