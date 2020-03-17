// Core Dependencies
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
     
// configuration and services
import { ProductRoutes } from "./product.routing"; 

// Components
import { CheckoutModule } from "./checkout/checkout.module";
import { ToastrModule } from 'ngx-toastr';

import { TestimonialsComponent } from "../product/testimonials/testimonials.component";
import { ProductComponent } from "./product.component";
import { BestProductComponent } from "./best-product/best-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { SharedModule } from "../shared/shared.module";
import { FavouriteProductsComponent } from "./favourite-products/favourite-products.component";
import { CartProductsComponent } from "./cart-products/cart-products.component";
import { CartCalculatorComponent } from "./cart-calculator/cart-calculator.component";
import { ContactusComponent } from "./contactus/contactus.component"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from '../shared/services/message.service'; 
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2'; 
  
 import { HttpModule } from '@angular/http';
import { FooterComponent } from "../index/footer/footer.component";

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(ProductRoutes), 
    SharedModule, CheckoutModule,
    ToastrModule.forRoot(), HttpClientModule,
    FormsModule, AngularMultiSelectModule,
    BrowserAnimationsModule,
    BrowserModule, AgmCoreModule,
    HttpModule, 
    NgbModule, 
    NouisliderModule,
    JwBootstrapSwitchNg2Module
     ],
    
  declarations: [
    ProductComponent,
    BestProductComponent,
    TestimonialsComponent,
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent,
    FavouriteProductsComponent,
    CartProductsComponent,
    ContactusComponent,
    CartCalculatorComponent
  ],
  exports: [BestProductComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [MessageService, FooterComponent]
})
export class ProductModule { }
