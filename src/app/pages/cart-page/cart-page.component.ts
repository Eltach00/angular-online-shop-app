import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/admin/shared/services/product.service';
import { Iproduct } from 'src/app/shared/interface';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart: Iproduct[] = [];
  sumOfCart = 0;
  constructor(private prodService: ProductService) {}
  ngOnInit(): void {
    this.cart = this.prodService.cartProducts;
    this.sumOfCart = this.cart.reduce(
      (sum: number, pr: Iproduct) => (sum += parseInt(pr.price)),
      0
    );
  }
}
