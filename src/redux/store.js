// import { configureStore } from "@reduxjs/toolkit";
// import apiConfigSlice from "./slices/apiConfigSlice";

// const store = configureStore({
//   reducer: {
//     apiConfig: apiConfigSlice,
//   },
// });

// export default store;
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import apiConfigSlice from "./slices/apiConfigSlice";
import tokenSlice from "./slices/tokenSlice";

const rootReducer = combineReducers({
  apiConfig: apiConfigSlice,
  token: tokenSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "apiConfig"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore actions with these types
        ignoredActions: ["persist/PERSIST"],
        // Ignore these paths in the state
        ignoredPaths: ["register"],
      },
    }),
});

export const persistor = persistStore(store);
export const purgePersistedState = () => persistor.purge();
export default store;















