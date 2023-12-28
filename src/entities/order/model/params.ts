import { eOrderDeliveryStatusType, eOrderOnPlaceStatusType, eOrderPickupStatusType, eOrderType } from './types';

interface IOrderItem {
	count: number;
	foodId: number;
}

interface IOrderOnPlace {
	status?: eOrderOnPlaceStatusType;
	tableId: number;
}

interface IOrderDelivery {
	address: string;
	status?: eOrderDeliveryStatusType;
}

interface IOrderPickup {
	status?: eOrderPickupStatusType;
}

export interface ICreateOrderDto {
	type: eOrderType;
	clientId: number;
	branchId: number;
	onPlace?: IOrderOnPlace;
	delivery?: IOrderDelivery;
	pickup?: IOrderPickup;
	items: IOrderItem[];
}

export interface IUpdateOrderDto extends Partial<ICreateOrderDto> {}

export interface IOrderFindManyParams {
	search?: string;
	branchId?: number;
	type?: eOrderType;
	clientId?: number;
	skip: number;
	take: number;
}
