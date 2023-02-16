import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import ProductsSlice from "./Products/ProductsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, ProductsSlice);

const store = configureStore({
  reducer: { products: persistedReducer },
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
