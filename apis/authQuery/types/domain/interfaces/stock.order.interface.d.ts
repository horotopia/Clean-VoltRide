import { StockOrderStatus } from "../enums";
export interface StockOrderInterface {
    id: string;
    partnerName: string;
    supplier: string;
    quantity: number;
    unitPrice: number;
    orderDate: Date;
    deliveryDate?: Date;
    status: StockOrderStatus;
}
