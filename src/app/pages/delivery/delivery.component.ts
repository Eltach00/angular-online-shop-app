import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent {
  deliveryForm: FormGroup;
  submited = false;
  constructor() {
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
      payment: this.deliveryForm.value.payment,
      date: new Date(),
    };
    console.log(this.deliveryForm);
    console.log(order);

    // this.prodService.create(product).subscribe((res) => {
    //   this.deliveryForm.reset();
    //   this.submited = false;
    //   this.router.navigate(['/']);
    // });
  }
}
