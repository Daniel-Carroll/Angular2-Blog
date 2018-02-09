import {Package} from './package';

/** Order Model
 * https://stackoverflow.com/questions/36150709/angular-2-observable-doesnt-map-to-model
 * 
 */

export class Pallet {

    palletId: String
    actualShipmentTimestamp: Date;
    actualShipmentId: String;
    numberOfTotes: Number;
    palletStatusCode: String;
    palletStatusDescription: String;
    createTimestamp: Date;
    createUserId: String;
    lastUpdateTimestamp: Date;
    lastUpdateUserId: String;
    toteList: Array<Package>;


    constructor(pallet: Pallet){
        this.palletId = pallet.palletId;
        this.actualShipmentTimestamp = pallet.actualShipmentTimestamp;
        this.actualShipmentId = pallet.actualShipmentId;
        this.numberOfTotes = pallet.numberOfTotes;
        this.palletStatusCode = pallet.palletStatusCode;
        this.palletStatusDescription = pallet.palletStatusDescription;
        this.createTimestamp = pallet.createTimestamp;
        this.createUserId = pallet.createUserId;
        this.lastUpdateTimestamp = pallet.lastUpdateTimestamp;
        this.lastUpdateUserId = pallet.lastUpdateUserId;
        if(pallet.toteList){
            this.toteList = pallet.toteList;
        }
    }

    static returnPallets(jsonArray: Array<Pallet>){
        return jsonArray.map((data) => new Pallet(data));
    }

  }