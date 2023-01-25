import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/admin/shared/services/product.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  type = '';
  constructor(private prodService: ProductService, private router: Router) {}
  setType(type: string) {
    this.type = type;
    if (this.type !== 'Cart') {
      this.router.navigate(['/'], {
        queryParams: {
          type: this.type,
        },
      });
      this.prodService.setType(this.type);
    }
  }
}
