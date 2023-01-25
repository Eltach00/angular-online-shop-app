import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iproduct } from 'src/app/shared/interface';
import { OrderServiceService } from 'src/app/shared/services/order-service.service';

export interface IOrders extends Iproduct {
  name: string;
  phone: string;
  address: string;
  ordres: string;
  payment: string;
}

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  orders: any[] = [];
  constructor(private orderService: OrderServiceService) {}

  remove(id: string) {
    this.orderService.remove(id).subscribe((resp) => {
      this.orders = this.orders.filter((pr) => pr.id !== id);
    });
  }
  ngOnInit(): void {
    this.orderService.getAll().subscribe((resp: any) => {
      this.orders = resp;
    });
  }

  reduceSum(orders: Iproduct[]) {
    return orders.reduce(
      (s: number, pr: Iproduct) => (s += parseInt(pr.price)),
      0
    );
  }
}
