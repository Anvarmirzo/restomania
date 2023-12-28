import { eBranchTableStatusType } from './types';

export interface ICreateBranchTableDto {
	title: string;
	location: string;
	branchId: number;
	status: eBranchTableStatusType;
}

export interface IUpdateBranchTableDto extends Partial<ICreateBranchTableDto> {}

export interface IBranchTableFindManyParams {
	search?: string;
	branchId?: number;
	skip: number;
	take: number;
}
