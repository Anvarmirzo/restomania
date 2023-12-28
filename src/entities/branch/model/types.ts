import { ITranslate } from 'entities/translate';
import { IContact } from 'entities/user';

export interface IBranch {
	id: number;
	title: ITranslate;
	description: ITranslate;
	photo: { id: number; originalName: string; url: string };
	contact: IContact;
	organization: {
		title: ITranslate;
	};
	status: true;
	address: true;
	workingHours: true;
}

interface IBranches {
	id: number;
	title: ITranslate;
	logo: { id: number; originalName: string; url: string };
}
