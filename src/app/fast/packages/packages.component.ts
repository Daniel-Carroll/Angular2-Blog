import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Package} from './../../shared/models/package';

import {PackageService} from '../../shared/services/packages/packages.service'


@Component({
  selector: 'packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  providers: [PackageService]
})
export class PackageComponent implements OnInit{
  dataLoading:boolean;
  errorMessage: string;
  packageList:Package[];
  selectedPackage: string;
  selectedProductList:any[];
  currentStore: number;

  constructor(private packageService: PackageService,
    private router: Router){}

  ngOnInit(){
    this.currentStore = 85;
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

  selectProductList(pkg){
    this.selectedPackage = pkg.packageId;
    this.selectedProductList = pkg.productList;
  }



}