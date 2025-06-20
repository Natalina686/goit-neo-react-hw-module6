import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const contactsPersistConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

const rootReducer = combineReducers({
    contacts: persistedContactsReducer,
    filters: filtersReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],

            },
        }),
})

export const persistor = persistStore(store);