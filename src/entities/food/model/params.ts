import { eFoodStatusType } from './types';
import { ITranslate } from 'entities/translate';

export interface ICreateFoodDto {
	title: ITranslate;
	description: ITranslate;
	branchId: number;
	status: eFoodStatusType;
	price: number;
	discountedPrice: number;
	photoId: number;
	categoryId: number;
}

export interface IUpdateFoodDto extends Partial<ICreateFoodDto> {}

export interface IFoodFindManyParams {
	search?: string;
	categoryId?: number;
	branchId?: number;
	skip: number;
	take: number;
}
