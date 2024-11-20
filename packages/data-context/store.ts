import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import accountSlice from "./reducers/account-reducer";
import checkoutSlice from "./reducers/checkout-reducer";
import numberReducer from "./reducers/number-reducer";
const persistConfig = {
  key: "root",
  storage: storage,
  version: 1,
};

const reducers = {
  account: accountSlice,
  checkout: checkoutSlice,
  number: numberReducer,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export { PersistGate };
