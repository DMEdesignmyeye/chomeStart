import { ToastrService } from "../../shared/services/toastr.service";
import { NgForm, EmailValidator } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../shared/models/product';
import { ProductbraService } from "../../shared/services/ProductbraService";
import { Component, OnInit, OnDestroy, HostListener, ElementRef} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TranslateService } from "../../shared/services/translate.service";

declare var $: any;

@Component({
	selector: "app-loginbra",
templateUrl: "./loginbra.component.html",
	styleUrls: ["./loginbra.component.scss"]
})
export class LoginbraComponent implements OnInit {


	bestBrazil: Product[] = [];
	errorMessage: any;
	createUser;
  closeResult: string;
	options: any;
	loading = false;
  model = {
    left: true,
    middle: false,
    right: false
};

dropdownList = [];
selectedItems = [];
dropdownSettings = {};

dropdownList1 = [];
selectedItems1 = [];
dropdownSettings1 = {};
	constructor(
		private productbraService: ProductbraService,
		private toastService: ToastrService,
    private router: Router,
     public el: ElementRef ,
    private route: ActivatedRoute,
    public translate: TranslateService,
		private toasterService: ToastrService,
   private modalService: NgbModal ) {	}

	ngOnInit() {
      this.translate.use("fa").then(() => {});
  }

  ngOnDestroy(){
  }

    open(content, type) {
        if (type === 'sm') {
            console.log('aici');
            this.modalService.open(content, { size: 'sm' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else {
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
