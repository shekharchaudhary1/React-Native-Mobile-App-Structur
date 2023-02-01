import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducers/rootReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createSagaMiddleware from "redux-saga";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

// import createSagaMiddleware from "redux-saga";
// import { configureStore } from "@reduxjs/toolkit";
// import rootSagas from "../saga";
// import { persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import rootReducer from "../Reducers/rootReducer";
// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const sagaMiddleware = createSagaMiddleware();
// export default configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
//   },
// });

// sagaMiddleware.run(rootSagas);
