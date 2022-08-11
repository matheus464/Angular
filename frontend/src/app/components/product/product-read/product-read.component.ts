import { Component, OnInit } from '@angular/core';

import { ProductRead2DataSource } from '../product-read2/product-read2-datasource';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action'];
  dataSource: ProductRead2DataSource;

  constructor(private productService: ProductService) { 
    this.dataSource = new ProductRead2DataSource();
  }

  ngOnInit(): void {
    this.productService.read().subscribe(product => {
      this.products = product
      console.log(this.products)
    })
  }

}
