import { ITranslate } from 'entities/translate';

export enum eTable {
	User,
	Activity,
	Organization,
	Branch,
	Category,
	Food,
	BranchTable,
	Client,
	Review,
	Order,
	Payment,
	File,
}

export enum eTablePermission {
	Create,
	Read,
	Update,
	Delete,
}

export enum eScope {
	Level_1,
	Level_2,
	Level_3,
	Level_4,
	Level_5,
}

export enum eOrganizationStatusType {
	Active,
	Inactive,
}

export interface IPermission {
	id?: number;
	table: eTable;
	scope: eScope;
	permissions: eTablePermission[];
}

export interface IOrganization {
	id: number;
	title: ITranslate;
	logo: { id: number; originalName: string; url: string };
	status: eOrganizationStatusType;
	address: string;
	branches: { id: number; title: ITranslate };
}

export interface IOrganizations {
	id: number;
	title: ITranslate;
	logo: { id: number; originalName: string; url: string };
}
