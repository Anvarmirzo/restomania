import { IPermission } from 'entities/organization';

export interface ICreateUserDto {
	displayName: string;
	phone: string;
	email?: string;
	organizationId?: number;
	branchId?: number;
	password: string;
	permissions: IPermission[];
}

export interface IUpdateUserDto extends Partial<ICreateUserDto> {
	archived?: boolean;
}

export interface IUserFindManyParams {
	skip: number;
	take: number;
	branchId?: number;
	organizationId?: number;
	archived?: boolean;
	search?: string;
}
