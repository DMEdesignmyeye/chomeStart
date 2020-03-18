import { CartProductsComponent } from './cart-products/cart-products.component';
import { FavouriteProductsComponent } from './favourite-products/favourite-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactusComponent } from "./contactus/contactus.component";
import { AddProductComponent } from './add-product/add-product.component'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core'; 
export const ProductRoutes: Routes = [
	{
		path: 'products',
		children: [
			{
				path: '',
				component: IndexComponent
			},{
				path: 'contacts',
				component: ContactusComponent
			},
			{
				path: 'testimonials',
				component: TestimonialsComponent
			},
			{
				path: 'all-products',
				component: ProductListComponent
			},
			{
				path: 'favourite-products',
				component: FavouriteProductsComponent
			},
			{
				path: 'cart-items',
				component: CartProductsComponent
			},
			{
				path: 'product/:id',
				component: ProductDetailComponent
			},	
			{
				path: 'all-products/:brand',
				component: ProductListComponent
			},
			{
				path: 'add-products',
				component: AddProductComponent
			},
		]
	}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forChild(ProductRoutes)
    ],
    exports: [
    ],
})
export class ProductRoutingModule { }
