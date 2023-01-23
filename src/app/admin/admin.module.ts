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
import { AuthGuard } from '../shared/auth.guard';

const childRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      {
        path: 'add',
        component: AddPageComponent,
        //  canActivate: [AuthGuard]
      },
      {
        path: 'product/:id/edit',
        component: EditPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'dashboard',
        component: DashboardPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'orders',
        component: OrdersPageComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  declarations: [
    AddPageComponent,
    EditPageComponent,
    DashboardPageComponent,
    LoginPageComponent,
    AdminLayoutComponent,
    OrdersPageComponent,
  ],
  providers: [AuthService],
})
export class AdminModule {}
