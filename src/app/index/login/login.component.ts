import { ToastrService } from "./../../shared/services/toastr.service";
import { NgForm, EmailValidator } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../shared/services/user.service";
import { AuthService } from "../../shared/services/auth.service";
import { User } from "../../shared/models/user";

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
	providers: [EmailValidator]
})
export class LoginComponent implements OnInit {
	user = {
		emailId: "",
		loginPassword: ""
	};

	errorInUserCreate = false;
	errorMessage: any;
	createUser;
  closeResult: string;
	constructor(
		private authService: AuthService,
		private userService: UserService,
		private toastService: ToastrService,
		private router: Router,
    private route: ActivatedRoute,
   private modalService: NgbModal
	) {
		this.createUser = new User();
	}

	ngOnInit() { }

	addUser(userForm: NgForm) {
		userForm.value["isAdmin"] = false;
		this.authService
			.createUserWithEmailAndPassword(userForm.value["emailId"], userForm.value["password"])
			.then((res) => {
				const user = {
					email: res.user.email,
					famil_name: res.user.displayName,
					uid: res.user.uid,
					verified_email: res.user.emailVerified,
					phoneNumber: res.user.phoneNumber,
					picture: res.user.photoURL
				};

				this.userService.createUser(user);

				this.toastService.success("Registrando", "Usuario Registrado exitosamente");

				setTimeout((router: Router) => {
					$("#createUserForm").modal("hide");
					this.router.navigate(["/"]);
				}, 1500);
			})
			.catch((err) => {
				this.errorInUserCreate = true;
				this.errorMessage = err;
				this.toastService.error("Error al crear usuario", err);
			});
	}

	signInWithEmail(userForm: NgForm) {
		this.authService
			.signInRegular(userForm.value["emailId"], userForm.value["loginPassword"])
			.then((res) => {
				this.toastService.success("Ingreso Exitoso", "Entrando, Aguarde por favor");

				const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");

				setTimeout((router: Router) => {
					this.router.navigate([returnUrl || "/products/all-products"]);
				}, 1500);

				this.router.navigate(["/products/all-products"]);
			})
			.catch((err) => {
				this.toastService.error("Ingreso Fallido", "Revise su email o contraseña y vuelva a intentarlo");
			});
	}

	signInWithGoogle() {
		this.authService
			.signInWithGoogle()
			.then((res) => {
				if (res.additionalUserInfo.isNewUser) {
					this.userService.createUser(res.additionalUserInfo.profile);
				}
				const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
				location.reload();
				this.router.navigate(["/"]);
			})
			.catch((err) => {
				this.toastService.error("Error", "Por favor pruebe nuevamente");
			});
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
