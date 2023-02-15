import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor (private productsService: ProductsService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
}

  ngOnInit(): void {}

  // I set the current product using the ProductsService to allow sharing of data with the ProductItemDetail component
  setProduct(product: Product) {
    this.productsService.setCurrentProduct(product);
  }

}
