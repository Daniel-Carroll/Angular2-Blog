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
    substitutedReferenceId: String;

    constructor(product: Product){
        this.fulfillmentOrderId = product.fulfillmentOrderId;
        this.externalShipmentId = product.externalShipmentId;
        this.actualSupplierShippingTimestamp = product.actualSupplierShippingTimestamp;
        this.sequenceNumber = product.sequenceNumber;
        this.productId = product.productId;
        this.productDescription = product.productDescription;
        this.productTypeCode = product.productTypeCode;
        this.productVariableWeight = product.productVariableWeight;
        this.orderedQuantity = product.orderedQuantity;
        this.shippedQuantity = product.shippedQuantity;
        this.shortQuantity = product.shortQuantity;
        this.ageRestrictionQuantity = product.ageRestrictionQuantity;
        this.pickStatusCode = product.pickStatusCode;
        this.shapeCode = product.shapeCode;
        this.substitutionFlag = product.substitutionFlag;
        this.substitutedFlag = product.substitutedFlag;
        this.retailPrice = product.retailPrice;
        this.pickTaskDuration = product.pickTaskDuration;
        if(product.departmentId){
            this.departmentId = product.departmentId;
        }
        this.pssDepartmentId = product.pssDepartmentId;
        this.length = product.length;
        this.width = product.width;
        this.height = product.height;
        this.weight = product.weight;
        this.cartSection = product.cartSection;
        this.substitutedReferenceId = product.substitutedReferenceId;
        this.packageDetailArray = product.packageDetailArray;
    }

    static returnProducts(jsonArray: Array<Product>){
        return jsonArray.map((data) => new Product(data));
    }
}