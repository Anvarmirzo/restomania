import { ITranslate } from 'entities/translate';

export enum eBranchTableStatusType {
	Free,
	Booked,
	Busy,
}

export interface IBranchTable {
	id: number;
	title: string;
	status: eBranchTableStatusType;
	location: string;
	branch: {
		title: ITranslate;
	};
}

export interface iBranchTables {
	id: number;
	title: string;
	status: eBranchTableStatusType;
	location: string;
	branch: {
		title: ITranslate;
	};
}
