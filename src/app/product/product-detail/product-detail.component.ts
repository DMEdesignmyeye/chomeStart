import { Product } from '../../shared/models/product'; 
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { ToastrService } from '../../shared/services/toastr.service';
import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { AuthService } from '../../shared/services/auth.service';
@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: [ './product-detail.component.scss' ]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
	private sub: any;
	product: Product;

	data : Date = new Date();
	private var: any;
    page = 4;
    page1 = 5;

    date: {year: number, month: number};
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;
 
    galleryImages: NgxGalleryImage[];

    state_icon_primary = true;
	constructor(
    public authService: AuthService,
		private route: ActivatedRoute,
		private productService: ProductService,
		private toastrService: ToastrService
		,private renderer : Renderer2, 
		config: NgbAccordionConfig
	) {
		this.product = new Product();
		
        config.closeOthers = true;
        config.type = 'info';
	}
 
	getProductDetail(id: string) {
		// this.spinnerService.show();
		const x = this.productService.getProductById(id);
		x.snapshotChanges().subscribe(
			(product) => {
				// this.spinnerService.hide();
				const y = product.payload.toJSON() as Product;

				y['$key'] = id;
				this.product = y; 

				this.galleryImages = [{
					small: y.productImageUrl,
					medium: y.productImageUrl,
					big: y.productImageUrl
				},
				{
					small: y.productImageUrl2,
					medium: y.productImageUrl2,
					big: y.productImageUrl2
				},
				{
					small: y.productImageUrl3,
					medium: y.productImageUrl3,
					big: y.productImageUrl3
				},
				{
					small: y.productImageUrl4,
					medium: y.productImageUrl4,
					big: y.productImageUrl4
				}
			];
 
		  
			},
			(error) => {
				this.toastrService.error('Error mientras se cargaban los dealles', error);
			}
		);
	}

	addToCart(product: Product) {
		this.productService.addToCart(product);
	}

		

    ngOnInit() {
		
		this.sub = this.route.params.subscribe((params) => {
			const id = params['id']; // (+) converts string 'id' to a number
			this.getProductDetail(id);
			 
		}); 

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
		}
		 
	
}
ngOnDestroy(){
	var navbar = document.getElementsByTagName('nav')[0];
	navbar.classList.remove('navbar-transparent');
}
	
}
