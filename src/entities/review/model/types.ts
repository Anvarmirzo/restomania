import { ITranslate } from 'entities/translate';

export interface Review {
	id: number;
	text: string;
	rating: number;
	branch: {
		id: number;
		title: ITranslate;
	};
	client: {
		id: number;
		displayName: ITranslate;
	};
}

export interface Reviews {
	id: number;
	text: string;
	rating: number;
	branch: { id: number; title: ITranslate };
	client: {
		id: number;
		displayName: ITranslate;
	};
}
