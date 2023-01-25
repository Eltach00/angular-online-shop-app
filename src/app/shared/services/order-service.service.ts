import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { env } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  constructor(private http: HttpClient) {}

  create(order: any) {
    return this.http.post(`${env.fbDbUrl}/orders.json`, order).pipe(
      map((res: any) => {
        return {
          ...order,
          id: res.name,
          date: new Date(order.date),
        };
      })
    );
  }

  getAll() {
    return this.http.get(`${env.fbDbUrl}/orders.json`).pipe(
      map((res: any) => {
        return Object.keys(res).map((key) => ({
          ...res[key],
          id: key,
          date: new Date(res[key].date),
        }));
      })
    );
  }

  remove(id: string) {
    return this.http.delete(`${env.fbDbUrl}/orders/${id}.json`);
  }
}
