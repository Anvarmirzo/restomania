import { ITranslate } from 'entities/translate';
import { eScope, eTable, eTablePermission } from 'entities/organization';

export enum eGender {
	Male,
	Female,
}

export enum eActivityType {
	UpdateActivity,
}

export interface IUser {
	id: number;
	displayName: ITranslate;
	permissions: {
		id: number;
		table: eTable;
		scope: eScope;
		permissions: eTablePermission[];
	};
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

export interface IUsers {
	id: number;
	displayName: ITranslate;
	branch: {
		select: {
			id: number;
			title: ITranslate;
		};
	};
	organization: {
		select: {
			id: number;
			title: ITranslate;
		};
	};
}

export interface IContact {
	phone: string;
	email: string;
}
