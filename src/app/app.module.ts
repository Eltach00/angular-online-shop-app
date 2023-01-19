import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, ProductPageComponent, CartPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
