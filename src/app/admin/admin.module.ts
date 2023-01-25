import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { QuillModule } from 'ngx-quill';
import { AdminChildRoutes } from './admin.child-routes';
import { FilterPipe } from '../pipes/filter-pipe.pipe';
import { ProductService } from './shared/services/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    AdminChildRoutes,
  ],
  exports: [RouterModule],
  declarations: [
    AddPageComponent,
    EditPageComponent,
    DashboardPageComponent,
    LoginPageComponent,
    AdminLayoutComponent,
    OrdersPageComponent,
    FilterPipe,
  ],
  providers: [AuthService, ProductService],
})
export class AdminModule {}
