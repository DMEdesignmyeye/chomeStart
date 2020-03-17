import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../shared/models/product';
import { AuthService } from '../../shared/services/auth.service';
import { ProductService } from '../../shared/services/product.service';
import { ToastrService } from '../../shared/services/toastr.service';
import { FooterComponent } from '../../index/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: [ './product-list.component.scss' ]
})
export class ProductListComponent implements OnInit, OnDestroy {
	productList: Product[];
	selectedBrand: string;

  doubleSlider = [1000, 5000]; 
  data : Date = new Date();
    loading = false;
    brands = [ 'Todos',  'Casa', 'Depto', 'Lote', 'Duplex' ];
    states = [ 'Todos', 'Alquiler Temporario', 'Alquiler Anual' , 'Venta', 'Inversión' ];
    selectedState = 'Todos'; 
		
  selectedDisp  = 'Todos';
    dispo = [ 'Todos', 'Disponible', 'No Disponible' ];

	page = 1;
	constructor(
		private route: ActivatedRoute,
		public authService: AuthService,
		private productService: ProductService,
		private toastrService: ToastrService,
		public footer: FooterComponent
	) {}

	ngOnInit() {
		this.selBrand();
		var body = document.getElementsByTagName('body')[0];
		body.classList.add('ecommerce');
		this.getAllProducts();
		this.footer.ngOnInit();
	}

selBrand(){	
if(!this.route.snapshot.paramMap.get('brand')){

	this.selectedBrand ='Todos';
}
else
{
		this.selectedBrand = this.route.snapshot.paramMap.get('brand');
}
}
	ngOnDestroy(){
		var body = document.getElementsByTagName('body')[0];
		body.classList.remove('ecommerce');  
}
	getAllProducts() {
		// this.spinnerService.show();
		this.loading = true;
		const x = this.productService.getProducts();
		x.snapshotChanges().subscribe(
			(product) => {
				this.loading = false;
				// this.spinnerService.hide();
				this.productList = [];
				product.forEach((element) => {
					const y = element.payload.toJSON();
					y['$key'] = element.key;
					this.productList.push(y as Product);
				});
			},
			(err) => {
				this.toastrService.error('Error mientras se listaban los Propiedads', err);
			}
		);
	}

	removeProduct(key: string) {
		this.productService.deleteProduct(key);
	}

	addFavourite(product: Product) {
		this.productService.addFavouriteProduct(product);
	}

	addToCart(product: Product) {
		this.productService.addToCart(product);
	}
}
