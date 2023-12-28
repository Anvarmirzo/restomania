import { ITranslate } from 'entities/translate';

export enum eFoodStatusType {
	Available,
	Unavailable,
}

export interface IFood {
	id: number;
	price: number;
	discountedPrice: number;
	status: eFoodStatusType;
	title: ITranslate;
	description: ITranslate;
	photo: { id: number; originalName: string; url: string };
	category: {
		id: number;
		title: ITranslate;
	};
	branch: {
		id: number;
		title: ITranslate;
	};
}

export interface IFoods {
	id: number;
	price: number;
	discountedPrice: number;
	status: eFoodStatusType;
	title: ITranslate;
	description: ITranslate;
	photo: { id: number; originalName: string; url: string };
	category: {
		id: number;
		title: ITranslate;
	};
	branch: {
		id: number;
		title: ITranslate;
	};
}
