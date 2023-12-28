import { ITranslate } from 'entities/translate';

export enum ePaymentType {
	Click,
	Payme,
}

export enum ePaymentStatusType {
	Pending,
	Paid,
	Canceled,
}

export enum eOrderType {
	Delivery,
	Pickup,
	OnPlace,
}

export enum eOrderPickupStatusType {
	InProcessing,
	Preparing,
	Awaits,
	Done,
}

export enum eOrderOnPlaceStatusType {
	Accepted,
	Preparing,
	Submitted,
}

export enum eOrderDeliveryStatusType {
	InProcessing,
	Preparing,
	InProgress,
	Delivered,
	Canceled,
}

export interface IOrder {
	id: number;
	type: number;
	pickup: { status: eOrderPickupStatusType };
	delivery: { address: string; status: eOrderDeliveryStatusType };
	onPlace: {
		table: { id: number; title: string };
		status: eOrderOnPlaceStatusType;
	};
	branch: {
		id: number;
		title: ITranslate;
	};
	client: {
		id: number;
		displayName: ITranslate;
	};
	items: {
		id: number;
		count: number;
		price: number;
		food: {
			id: number;
			title: ITranslate;
		};
	};
}

export interface IOrders {
	id: number;
	type: eOrderType;
	price: number;
	branch: {
		id: number;
		title: ITranslate;
	};
	client: {
		id: number;
		displayName: ITranslate;
	};
}
