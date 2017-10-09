/* Package Model
 */

import {Product} from './product';

export class Package{
    packageId: string;
    packageStatusCodeDescription: string;
    packageTypeCode: string;
    storePutawayLocationId: string;
    module: number;
    productList: Array<Product>;
}