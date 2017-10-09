/** 
 * Product Model
*/

import {Package} from './package';

export class Product{
    fulfillmentOrderId: string;
    externalShipmentId: string;
    actualSupplierShippingTimestamp: Date;
    sequenceNumber: number;
    productId: number;
    productDescription: string;
    packageDetailArray: Array<Package>;
    supplierSkuId: string;
    productTypeCode: string;
    productVariableWeight: boolean;
    orderedQuantity: number;
    shippedQuantity: number;
    shortQuantity: number;
    ageRestrictionQuantity: number;
    pickStatusCode: number;
    shapeCode: number;
    substitutionFlag: boolean;
    substitutedFlag: boolean;
    retailPrice: string;
    pickTaskDuration: number;
    departmentId: number;
    pssDepartmentId: number;
    length: number;
    width: number;
    height: number;
    weight: number;
    cartSection: number;
    substitutedReferenceId;
}