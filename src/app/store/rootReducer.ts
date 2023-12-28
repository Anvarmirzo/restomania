import { authReducer } from 'entities/auth';

export const rootReducer = {
	auth: authReducer,
	/*	[baseApi.reducerPath]: baseApi.reducer,
        [authServiceApi.reducerPath]: authServiceApi.reducer,*/
};
