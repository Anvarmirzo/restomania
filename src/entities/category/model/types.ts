import { ITranslate } from 'entities/translate';

export interface ICategory {
	id: number;
	title: ITranslate;
	branch: {
		id: number;
		title: ITranslate;
	};
}

export interface ICategories {
	id: number;
	title: ITranslate;
	branch: {
		id: number;
		title: ITranslate;
	};
}
