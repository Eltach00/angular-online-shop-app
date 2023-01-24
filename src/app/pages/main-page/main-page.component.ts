import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/admin/shared/services/product.service';
import { Iproduct } from 'src/app/shared/interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  products$: Observable<Iproduct[]> | undefined;
  constructor(public prodService: ProductService) {}
  ngOnInit(): void {
    this.products$ = this.prodService.getAll();
  }
}
