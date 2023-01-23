import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../shared/services/product.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent {
  addFormGroup: FormGroup;
  submited = false;
  constructor(private prodService: ProductService, private router: Router) {
    this.addFormGroup = new FormGroup({
      type: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.addFormGroup.invalid) {
      return;
    }
    this.submited = true;
    const product = {
      type: this.addFormGroup.value.type,
      title: this.addFormGroup.value.title,
      photo: this.addFormGroup.value.photo,
      info: this.addFormGroup.value.info,
      price: this.addFormGroup.value.price,
      date: new Date(),
    };
    this.prodService.create(product).subscribe((res) => {
      this.addFormGroup.reset();
      this.submited = false;
      this.router.navigate(['/']);
    });
  }
}
