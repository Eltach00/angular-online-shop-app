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
    const cartFormLocale = JSON.parse(<string>localStorage.getItem('cart'));
    if (cartFormLocale) {
      this.cart = cartFormLocale;
    }
    console.log(this.cart);

    this.sumOfCart = this.cart.reduce(
      (sum: number, pr: Iproduct) => (sum += parseInt(pr.price)),
      0
    );
  }
  clearCart() {
    localStorage.removeItem('cart');
    this.cart.length = 0;
  }
  deleteProduct(id: string) {
    this.cart = this.cart.filter((pr) => pr.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
