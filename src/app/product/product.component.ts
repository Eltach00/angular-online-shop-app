import { Component, Input } from '@angular/core';
import { Iproduct } from '../shared/interface';
import { ProductService } from '../admin/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  product!: Iproduct;

  constructor(private prodService: ProductService) {}
  addToCart(product: Iproduct) {
    this.prodService.addToCart(product);
  }
}
