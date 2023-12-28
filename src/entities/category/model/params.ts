import { ITranslate } from 'entities/translate';

export interface ICreateCategoryDto {
	title: ITranslate;
	branchId: number;
}

export interface IUpdateCategoryDto extends Partial<ICreateCategoryDto> {}

export interface ICategoryFindManyParams {
	search?: string;
	branchId?: number;
	skip: number;
	take: number;
}
