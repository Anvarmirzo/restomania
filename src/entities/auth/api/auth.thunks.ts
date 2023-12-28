import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService, ILoginDto, IRegistrationDto } from 'entities/auth';

export const loginThunk = createAsyncThunk('auth/login', async (params: ILoginDto, thunkAPI) => {
	try {
		const res = await authService.login(params, thunkAPI.signal);

		return res.data;
	} catch (e) {
		return thunkAPI.rejectWithValue('Не удалось авторизоваться.');
	}
});

export const registerThunk = createAsyncThunk('auth/register', async (params: IRegistrationDto, thunkAPI) => {
	try {
		const res = await authService.register(params, thunkAPI.signal);

		return res.data;
	} catch (e) {
		return thunkAPI.rejectWithValue('Не удалось зарегистрироваться.');
	}
});
