import { ITranslate } from 'entities/translate';
import { IContact } from 'entities/user';

export enum eLoyaltyStatusType {
	FirstLevel,
}

export interface IClient {
	id: number;
	bonuses: number;
	firstName: string;
	lastName: string;
	preferences: string;
	dateOfBirth: string;
	loyaltyStatus: eLoyaltyStatusType;
	displayName: ITranslate;
	branch: {
		id: number;
		title: ITranslate;
	};
	organization: {
		id: number;
		title: ITranslate;
	};
	contact: IContact;
	archived: boolean;
}

export interface IClients {
	id: number;
	bonuses: number;
	firstName: string;
	lastName: string;
	preferences: string;
	dateOfBirth: string;
	loyaltyStatus: eLoyaltyStatusType;
	displayName: ITranslate;
	branch: {
		id: number;
		title: ITranslate;
	};
	organization: {
		id: number;
		title: ITranslate;
	};
}
