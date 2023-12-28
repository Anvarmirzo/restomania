import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../store/rootReducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
	devTools: !import.meta.env.PROD,
});

export type ActionPayloadData<T> = {
	data: T;
	error?: string;
	isLoading: boolean;
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
