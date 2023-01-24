import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ProductService } from 'src/app/admin/shared/services/product.service';
import { Iproduct } from 'src/app/shared/interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product$: Observable<Iproduct> | undefined;
  constructor(
    private prodService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.product$ = this.route.params.pipe(
      switchMap((params) => {
        return this.prodService.getById(params['id']);
      })
    );
  }

  addToCart(product: Iproduct) {
    this.prodService.addToCart(product);
  }
}
