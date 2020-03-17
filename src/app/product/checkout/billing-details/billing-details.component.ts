import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product';
import { BillingService } from '../../../shared/services/billing.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User, UserDetail } from '../../../shared/models/user';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from '../../../shared/services/message.service';

@Component({
	selector: 'app-billing-details',
	templateUrl: './billing-details.component.html',
	styleUrls: [ './billing-details.component.scss' ]
})
export class BillingDetailsComponent implements OnInit {
	userDetails: User;
	products: Product[];
	userDetail: UserDetail;
  model: any = {};

	constructor(
     public MessageService: MessageService ,
    private toastr: ToastrService,
		authService: AuthService,
		private billingService: BillingService,
		productService: ProductService,
		private router: Router
	) {
		/* Hiding Shipping Tab Element */
		document.getElementById('productsTab').style.display = 'none';
		document.getElementById('shippingTab').style.display = 'none';
		document.getElementById('billingTab').style.display = 'block';
		document.getElementById('resultTab').style.display = 'none';

		this.userDetail = new UserDetail();
		this.products = productService.getLocalCartProducts();
		this.userDetails = authService.getLoggedInUser();
	}

	ngOnInit() {}


onSubmit(form) {
  this.MessageService.sendMessage(form).subscribe(() => {
});
this.toastr.success( 'En instantes un asesor se pondrá en contacto contigo',  'Gracias Por Comunicarte con C - Home', {timeOut: 60000});
this.reset();
}

reset() {

 setTimeout(function () {
   window.location.reload();
 }, 1000);
}


}
