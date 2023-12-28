import { ILoginDto, IRegistrationDto } from 'entities/auth';
import { api } from 'shared/api';
import { API_ENDPOINTS } from 'shared/config/endpoints';

export const authService = {
	login(params: ILoginDto, signal?: AbortSignal) {
		return api.post(API_ENDPOINTS.auth.login, params, { signal }).then((res) => {
			localStorage.setItem('jwt', res.data.jwt || '');
			return res.data;
		});
	},
	register(params: IRegistrationDto, signal?: AbortSignal) {
		return api.post(API_ENDPOINTS.auth.register, { signal }).then((res) => res.data);
	},
};
