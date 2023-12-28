import { eOrganizationStatusType } from 'entities/organization';
import { ITranslate } from 'entities/translate';

export interface ICreateBranchDto {
	title: ITranslate;
	description?: ITranslate;
	status: eOrganizationStatusType;
	address: string;
	workingHours: string;
	photoId: number;
	organizationId: number;
	phone: string;
	email?: string;
}

export interface IUpdateBranchDto extends Partial<ICreateBranchDto> {}

export interface IBranchFindManyParams {
	search?: string;
	skip: number;
	take: number;
}
