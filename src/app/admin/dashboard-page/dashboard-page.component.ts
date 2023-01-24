import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Iproduct } from 'src/app/shared/interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  prSubscription: Subscription | undefined;
  removeSubscription: Subscription | undefined;
  products: Iproduct[] = [];
  term = '';
  constructor(private prodService: ProductService) {}

  remove(id: string) {
    this.prodService.remove(id).subscribe((resp) => {
      this.products = this.products.filter((pr) => pr.id !== id);
    });
  }
  ngOnInit(): void {
    this.prodService.getAll().subscribe((resp) => {
      console.log(resp);

      this.products = resp;
    });
  }
  ngOnDestroy(): void {
    if (this.prSubscription) {
      this.prSubscription.unsubscribe();
    }
    if (this.removeSubscription) {
      this.removeSubscription.unsubscribe();
    }
  }
}
