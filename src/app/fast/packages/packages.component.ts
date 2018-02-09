import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';

import {Package} from './../../shared/models/package';
import {Product} from './../../shared/models/product';
import {Pallet} from './../../shared/models/pallet';

import {PackageService} from '../../shared/services/packages/packages.service'
import {DarkStoreService} from '../../shared/services/dark-store/dark-store.service'


@Component({
  selector: 'packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  providers: [PackageService, DarkStoreService]
})
export class PackageComponent implements OnInit{
  dataLoading:boolean;
  errorMessage: string;
  packageList:Package[];
  palletList:Pallet[];
  selectedPackage: string;
  selectedProductList:Product[];
  currentStore: number;

  constructor(private packageService: PackageService, private darkStoreService: DarkStoreService,
    private router: Router){}

  ngOnInit(){
    this.currentStore = 732;
    this.getPackages(this.currentStore);
  }

  getPackages(storeId){
    this.dataLoading = true;
    this.packageService.getPackagesInRecieve(storeId)
      .then(
        data => {
          this.packageList = data;
          this.selectProductList(this.packageList[0]);
          this.dataLoading = false;
          console.log(this.packageList);
        }
      )
  }

  getPalletsForStore(storeId){
    this.dataLoading = true;
    this.darkStoreService.getShipmentsByStore(storeId)
      .then(
        data => {
          this.palletList = data;
          this.dataLoading = false;
          console.log(this.palletList);
        }
      )
  }

  onChangeEvent(tabChange: MatTabChangeEvent){
    console.log("herro" + tabChange.index);
    this.getPalletsForStore(this.currentStore);
  }

  selectProductList(pkg){
    console.log(pkg.productList)
    this.selectedPackage = pkg.packageId;
    this.selectedProductList = pkg.productList;
  }



}