/* Package Model
 */

import {Product} from './product';

export class Package{
    packageId: string;
    packageStatusCode: string;
    packageStatusCodeDescription: string;
    packageStatusUpdateTimestamp: Date;
    packageTypeCode: string;
    packageTypeCodeDescription: string;
    packageDestinationLocationNumber: number;
    actualReceivingLocationNumber: number;
    storePutawayLocationId: string;
    module: number;
    productList: Array<Product>;

    constructor(pkg: Package){
        this.packageId = pkg.packageId;
        this.packageStatusCode = pkg.packageStatusCode;
        this.packageStatusCodeDescription = pkg.packageStatusCodeDescription;
        this.packageStatusUpdateTimestamp = pkg.packageStatusUpdateTimestamp;
        this.packageTypeCode = pkg.packageTypeCode;
        this.packageTypeCodeDescription = pkg.packageTypeCodeDescription;
        this.packageDestinationLocationNumber = pkg.packageDestinationLocationNumber;
        this.actualReceivingLocationNumber = pkg.actualReceivingLocationNumber;
        this.storePutawayLocationId = pkg.storePutawayLocationId;
        this.productList = Product.returnProducts(pkg.productList);
    }

    static returnPackages(jsonArray: Array<Package>){
        return jsonArray.map((data) => new Package(data));
    }
}