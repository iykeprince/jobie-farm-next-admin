import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  transactions: [],
  orders: [],
  users: [],
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
    addOrders(state, action) {
      state.orders = action.payload.orders;
    },
    addUsers(state, action) {
      state.users = action.payload.users;
    },
    searchProducts(state, action) {
      const reg = new RegExp(`${action.payload.word}`, "gi");
      const matched = state.products.filter((pro) => reg.test(pro.title));
      state.products = matched;
    },
    searchUsers(state, action) {
      const reg = new RegExp(`${action.payload.word}`, "gi");
      const matched = state.users.filter((usr) => reg.test(usr.lastName));
      state.users = matched;
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
