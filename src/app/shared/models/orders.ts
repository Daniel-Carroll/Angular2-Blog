import {Shipment} from './shipment';
import {Package} from './package';

/** Order Model
 * https://stackoverflow.com/questions/36150709/angular-2-observable-doesnt-map-to-model
 * 
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
    orderPickStatus: string;
    scheduledDeliveryTimestamp: Date;
    dnsReasonList: Array<any>;
    orderActions: Array<any>;
    shipmentList: Array<any>;
    packageList: Array<Package>;

    constructor(order: Order){
        this.externalOrderId = order.externalOrderId;
        this.primaryCustomerFirstName = order.primaryCustomerFirstName;
        this.primaryCustomerLastName = order.primaryCustomerLastName;
        this.primaryCustomerEmailId = order.primaryCustomerEmailId;
        this.primaryCustomerDisplayPhoneNumber = order.primaryCustomerDisplayPhoneNumber;
        this.primaryCustomerPhoneCountryCode = order.primaryCustomerPhoneCountryCode;
        this.primaryCustomerAreaCode = order.primaryCustomerAreaCode;
        this.primaryCustomerPhoneNumber = order.primaryCustomerPhoneNumber;
        this.orderPickStatus = order.orderPickStatus;
        this.scheduledDeliveryTimestamp = order.scheduledDeliveryTimestamp;
        this.dnsReasonList = order.dnsReasonList;
        this.orderActions = order.orderActions;
        if(order.shipmentList.length > 0){
            this.packageList = Package.returnPackages(order.shipmentList[0].packageList);
        }
    }

    static returnOrders(jsonArray: Array<Order>){
        return jsonArray.map((data) => new Order(data));
    }

  }