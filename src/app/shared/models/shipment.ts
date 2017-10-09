import {Package} from './package';

export class Shipment {
    fulfillmentOrderId: string;
    externalShipmentId: string;
    actualSupplierShippingTimestamp: Date;
    externalOrderId: string;
    orderDestinationLocationId: number;
    paymentStatusCode: string;
    paymentStatusDescription: string;
    fulfillmentModeCode: string;
    packageList: Array<Package>;
   
  }