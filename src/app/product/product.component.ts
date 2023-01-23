import { Component, Input } from '@angular/core';
import { Iproduct } from '../shared/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  product!: Iproduct;
}
