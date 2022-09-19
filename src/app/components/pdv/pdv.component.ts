import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {
  AfterContentInit,

  ContentChildren,
  Input,
  AfterViewInit,
  QueryList,
  ViewChild,
  ContentChild,
} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {
  MatColumnDef,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const Products : Product[] = []


export interface Product {
  product : String,
  unitPrice : number,
  qty : number,
  subtotal : number

}
@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrls: ['./pdv.component.scss']
})
export class PdvComponent implements OnInit {
  public products : any = []
  //courses$ : Observable<Product[]>;

  //displayedColumns = ['name', 'category']
  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['product', 'unitPrice', 'qty', 'subtotal'];
  dataSource = new MatTableDataSource<Product>(this.products);





  clearTable() {
    this.dataSource.data = [];
  }

  addData() {

    let obj = {product: "Apple", unitPrice: 100, qty: 70, subtotal: 7000}
    this.products.push(obj)

    console.log("this.products", this.products)

   this.dataSource.data = this.products;
   console.log("this.dataSource.data", this.dataSource.data)

  }
}

/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */




