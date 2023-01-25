import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/admin/shared/services/product.service';
import { OrderServiceService } from 'src/app/shared/services/order-service.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent {
  deliveryForm: FormGroup;
  submited = false;
  constructor(
    private orderService: OrderServiceService,
    private prodService: ProductService
  ) {
    this.deliveryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.deliveryForm.invalid) {
      return;
    }
    this.submited = true;
    const order = {
      name: this.deliveryForm.value.name,
      phone: this.deliveryForm.value.phone,
      address: this.deliveryForm.value.address,
      orders: this.prodService.cartProducts,
      payment: this.deliveryForm.value.payment,
      date: new Date(),
    };

    this.orderService.create(order).subscribe((res) => {
      this.deliveryForm.reset();
      this.submited = false;
    });
  }
}
