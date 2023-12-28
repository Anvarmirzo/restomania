import { IUser } from 'entities/user';

export interface IRegistrationDto {
	firstName: string;
	lastName: string;
	secondName: string;
	phone: string;
	password: string;
}

export interface ILoginDto {
	phone: string;
	password: string;
}

export interface IAuthenticatedUser {
	user: IUser;
	jwt: string;
}

export interface IJWTPayload {
	organizationId?: number;
	branchId?: number;
	id: number;
	type: 'Client' | 'User';
	iat?: number;
	exp?: number;
}

export interface IRequestPasswordResetDto {
	phone: string;
}

export interface ICheckResetPasswordDto {
	userId: number;
	token: string;
}

export interface IPasswordResetDto {
	userId: number;
	token: string;
	password: string;
}
