import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Iproduct } from 'src/app/shared/interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  product!: Iproduct;
  editForm!: FormGroup;
  submitted = false;
  constructor(
    private prodService: ProductService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap((params) => {
          return this.prodService.getById(params['id']);
        })
      )
      .subscribe((product: Iproduct) => {
        this.product = product;
        this.editForm = new FormGroup({
          type: new FormControl(this.product.type, Validators.required),
          title: new FormControl(this.product.title, Validators.required),
          photo: new FormControl(this.product.photo, Validators.required),
          info: new FormControl(this.product.info, Validators.required),
          price: new FormControl(this.product.price, Validators.required),
        });
      });
  }

  submit() {
    if (this.editForm.invalid) {
      return;
    }
    this.submitted = true;

    this.prodService
      .update({
        ...this.product,
        type: this.editForm.value.type,
        title: this.editForm.value.title,
        photo: this.editForm.value.photo,
        info: this.editForm.value.info,
        price: this.editForm.value.price,
        date: new Date(),
      })
      .subscribe((res) => {
        this.submitted = false;
        this.router.navigate(['/admin', 'dashboard']);
      });
  }
}
