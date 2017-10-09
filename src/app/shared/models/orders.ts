import {Shipment} from './shipment';

/* Order Model
 */

export class Order {

    externalOrderId: string;
    primaryCustomerFirstName: string;
    primaryCustomerLastName: string;
    primaryCustomerEmailId: string;
    primaryCustomerDisplayPhoneNumber: string;
    primaryCustomerPhoneCountryCode: string;
    primaryCustomerAreaCode: string;
    primaryCustomerPhoneNumber: string;
    scheduledDeliveryTimestamp: Date;
    dnsReasonList: Array<any>;
    orderActions: Array<any>;
    shipmentList: Array<any>;

    constructor(order: Order){
        this.externalOrderId = order.externalOrderId;
        this.primaryCustomerFirstName = order.primaryCustomerFirstName;
        this.primaryCustomerLastName = order.primaryCustomerLastName;
        this.primaryCustomerEmailId = order.primaryCustomerEmailId;
        this.primaryCustomerDisplayPhoneNumber = order.primaryCustomerDisplayPhoneNumber;
        this.primaryCustomerPhoneCountryCode = order.primaryCustomerPhoneCountryCode;
        this.primaryCustomerAreaCode = order.primaryCustomerAreaCode;
        this.primaryCustomerPhoneNumber = order.primaryCustomerPhoneNumber;
        this.scheduledDeliveryTimestamp = order.scheduledDeliveryTimestamp;
        this.dnsReasonList = order.dnsReasonList;
        this.orderActions = order.orderActions;
        this.shipmentList = order.shipmentList;
    }

    static returnOrders(jsonArray: Array<Order>){
        return jsonArray.map((data) => new Order(data));
    }

  }