export interface ICreateReviewDto {
	text: string;
	rating: number;
	clientId: number;
	branchId: number;
}

export interface IUpdateReviewDto extends Partial<ICreateReviewDto> {}

export interface IReviewFindManyParams {
	search?: string;
	branchId?: number;
	clientId?: number;
	skip: number;
	take: number;
}
