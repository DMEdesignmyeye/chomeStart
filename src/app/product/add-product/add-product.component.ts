import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/product';

declare var $: any;
declare var require: any;
declare var toastr: any;
const shortId = require('shortid');
const moment = require('moment');

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: [ './add-product.component.scss' ]
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  brands = [ 'Casa', 'Depto', 'Lote','Duplex' ];
  states = [ 'Alquiler Temporario', 'Alquiler Anual' , 'Venta', 'Inversión' ];
  selectedState = 'Alquiler Temporario';
  selectedBrand = 'Casa';
selectedDisp  = 'Disponible';
  dispo = [  'Disponible', 'No Disponible' ];

  moneys = [ '$', 'U$D' ];
  selectedMoney  = '$';
	constructor(private productService: ProductService) {}

	ngOnInit() {}

	createProduct(productForm: NgForm) {
		productForm.value['productId'] = 'PROD_' + shortId.generate();
		productForm.value['productAdded'] = moment().unix();
		productForm.value['ratings'] = Math.floor(Math.random() * 5 + 1);
		if (productForm.value['productImageUrl'] === undefined) {
      productForm.value['productImageUrl'] = '../../../assets/img/default.jpg'
		};
		if (productForm.value['productImageUrl2'] === undefined) {
      productForm.value['productImageUrl2'] = '../../../assets/img/default.jpg'
		};
		if (productForm.value['productImageUrl3'] === undefined) {
      productForm.value['productImageUrl3'] = '../../../assets/img/default.jpg'
		};
		if (productForm.value['productImageUrl4'] === undefined) {
      productForm.value['productImageUrl4'] = '../../../assets/img/default.jpg'
		};

		productForm.value['favourite'] = false;

		const date = productForm.value['productAdded'];

		this.productService.createProduct(productForm.value);

		this.product = new Product();

		$('#exampleModalLong').modal('hide');

		toastr.success(productForm.value['productName'] + '  Agregada ', ' Propiedad Creada');
	}
}
