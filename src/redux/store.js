import { configureStore } from "@reduxjs/toolkit";
import sessionStorage from "redux-persist/es/storage/session";
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
import usersReducer from "./features/usersSlice";
import authReducer from "./features/authSlice";

const persistConfig = {
	key: "auth",
	storage: sessionStorage,
	whitelist: ["isLogin", "user", "token"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
	reducer: {
		users: usersReducer,
		auth: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
export default store;
