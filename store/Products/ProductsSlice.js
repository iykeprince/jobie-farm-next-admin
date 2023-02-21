import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalAmount: 0,
  totalQuantity: 0,
  transactions: [],
};

const ProductsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProducts(state, action) {
      state.products = action.payload.products;
    },
    addTransactions(state, action) {
      state.transactions = action.payload.transactions;
    },
    searchProducts(state, action) {
      const reg = new RegExp(`${action.payload.word}`, "gi");
      const matched = state.products.filter((pro) => reg.test(pro.title));
      state.products = matched;
    },
    deleteCartItem(state, action) {
      const { id } = action.payload;
      const existingItem = state.carts.find((item) => item.id === id);
      const updatedAmount = +state.totalAmount - +existingItem.totalPrice;
      state.totalAmount = updatedAmount.toFixed(2);
      state.totalQuantity = state.totalQuantity - +existingItem.quantity;
      state.carts = state.carts.filter((item) => item.id !== id);
    },

    filterByDate(state, action) {
      function isDateInRange(dateToCheck, startDate, endDate) {
        return dateToCheck >= startDate && dateToCheck <= endDate;
      }

      const { startDate, endDate } = action.payload;
      const filtered = state.transactions.filter((item) => {
        const date = new Date(item.date);
        return isDateInRange(date, startDate, endDate);
      });
      if (filtered.length === 0) state.transactions = [];
      state.transactions = filtered;
    },
  },
});
export const ProductsActions = ProductsSlice.actions;
export default ProductsSlice.reducer;
