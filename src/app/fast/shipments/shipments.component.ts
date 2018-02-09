import { Component, OnInit } from '@angular/core';

import {Package} from './../../shared/models/package';
import {Product} from './../../shared/models/product';
import {Pallet} from './../../shared/models/pallet';


import {PackageService} from '../../shared/services/packages/packages.service'
import {DarkStoreService} from '../../shared/services/dark-store/dark-store.service'

@Component({
  selector: 'shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css'],
  providers: [PackageService, DarkStoreService]
})
export class ShipmentsComponent implements OnInit {

  dataLoading: boolean;
  shipmentList: any[];
  selectedPallet: Pallet;
  toteList: any[];

  constructor(private packageService: PackageService, private darkStoreService: DarkStoreService){}

  ngOnInit() {
    this.getPalletsForStore(732)
  }

  getPalletsForStore(storeId){
    this.dataLoading = true;
    this.darkStoreService.getShipmentsByStore(storeId)
      .then(
        data => {
          this.shipmentList = data;
          this.getPalletDetails(data[0].palletList[0]);
          this.dataLoading = false;
          console.log(this.shipmentList);
        }
      )
  }

  getPalletDetails(pallet){
    this.dataLoading = true;
    this.darkStoreService.getPalletDetails(pallet)
      .then(
        data => {
          this.selectedPallet = data;
          this.toteList = data.toteList;
          this.dataLoading = false;
          console.log(this.selectedPallet)
        }
      )
  }

}
