import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  noProduct: false,
  transactions: [],
  filteredTransactions: [],
  noTransaction: false,
  orders: [],
  filteredOrders: [],
  noOrder: false,
  users: [],
  filteredUsers: [],
  noUser: false,
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
      if (matched.length === 0) {
        state.noProduct = true;
      } else {
        state.noProduct = false;
      }
      state.filteredProducts = matched;
    },
    searchUsers(state, action) {
      const reg = new RegExp(`${action.payload.word}`, "gi");
      const matched = state.users.filter((usr) => {
        if (reg.test(usr.lastName)) {
          console.log(usr.lastName);
          return true;
        } else return false;
      });
      if (matched.length === 0) {
        state.noUser = true;
      } else {
        state.noUser = false;
      }
      state.filteredUsers = matched;
    },
    filterByDate(state, action) {
      function isDateInRange(dateToCheck, startDate, endDate) {
        return dateToCheck >= startDate && dateToCheck <= endDate;
      }
      const { startDate, endDate } = action.payload;
      const filtered = state.transactions.filter((item) => {
        const date = new Date(item.date);
        if (isDateInRange(date, startDate, endDate)) return true;
        else return false;
      });
      if (filtered.length === 0) {
        state.noTransaction = true;
      } else {
        state.noTransaction = false;
      }
      state.filteredTransactions = filtered;
    },
    filterOrders(state, action) {
      const { type, order, payment } = action.payload;
      if (type === "All" && order === "All" && payment === "All") {
        state.filteredOrders = state.orders;
        return;
      }
      const filtered = state.orders.filter((ord) => {
        return (
          (ord.type === type || type === "All") &&
          (ord.orderStatus === order || order === "All") &&
          (ord.paymentStatus === payment || payment === "All")
        );
      });
      state.filteredOrders = filtered;
    },
  },
});
export const ProductsActions = ProductsSlice.actions;
export default ProductsSlice.reducer;
