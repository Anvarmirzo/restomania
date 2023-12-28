import { eLoyaltyStatusType } from './types';

export interface ICreateClientDto {
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	preferences: string;
	phone: string;
	email?: string;
	organizationId: number;
	branchId: number;
	password: string;
}

export interface IUpdateClientDto extends Partial<ICreateClientDto> {
	archived?: boolean;
	bonuses?: number;
	loyaltyStatus?: eLoyaltyStatusType;
}

export interface IClientFindManyParams {
	skip: number;
	take: number;
	branchId?: number;
	organizationId?: number;
	archived?: boolean;
	search: string;
}
