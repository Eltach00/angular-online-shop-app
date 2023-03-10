import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { env } from 'src/app/environments/environment';
import { Iproduct } from 'src/app/shared/interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  type = '';
  cartProducts: Iproduct[] = [];
  localStorageCart = localStorage;
  create(product: any) {
    return this.http.post(`${env.fbDbUrl}/products.json`, product);
  }

  getAll(): Observable<Iproduct[]> {
    return this.http.get(`${env.fbDbUrl}/products.json`).pipe(
      map((res: any) => {
        return Object.keys(res).map((key) => ({
          ...res[key],
          id: key,
          date: new Date(res[key].date),
        }));
      })
    );
  }
  getById(id: string) {
    return this.http.get(`${env.fbDbUrl}/products/${id}.json`).pipe(
      map((res: any) => ({
        ...res,
        id,
        date: new Date(res.date),
      }))
    );
  }

  remove(id: string) {
    return this.http.delete(`${env.fbDbUrl}/products/${id}.json`);
  }

  update(product: Iproduct) {
    return this.http.patch(
      `${env.fbDbUrl}/products/${product.id}.json`,
      product
    );
  }

  setType(type: string) {
    this.type = type;
  }

  addToCart(product: Iproduct) {
    this.cartProducts.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}
