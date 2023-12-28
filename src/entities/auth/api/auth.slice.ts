import { createSlice } from '@reduxjs/toolkit';
import { ILoginDto, loginThunk, registerThunk } from 'entities/auth';
import { ActionPayloadData } from 'app/store';

interface IState {
	loginDto: ActionPayloadData<ILoginDto | null>;
}

const initialState: IState = {
	loginDto: {
		data: null,
		isLoading: false,
		error: undefined,
	},
};

export const { reducer: authReducer } = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginThunk.fulfilled, (state, action) => {
			state.loginDto.data = action.payload;
		});
		builder.addCase(registerThunk.fulfilled, (state, action) => {
			state.loginDto.data = action.payload;
		});
	},
});
