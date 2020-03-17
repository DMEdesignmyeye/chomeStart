 import { Location } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  VERSION} from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { ProductService } from "../services/product.service";
import { TranslateService } from "../services/translate.service";
 import { Injectable } from '@angular/core';
 import { MessageService } from '../services/message.service';
 import { ToastrManager } from 'ng6-toastr-notifications';
 import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
 



@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})

@Injectable()
export class NavbarComponent implements OnInit {
  angularVersion = VERSION;

  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(
    public authService: AuthService, 
    public location: Location, 
    private element : ElementRef,
    public productService: ProductService,
    public translate: TranslateService, 
    private modalService: NgbModal  , 
    public toastr: ToastrManager, 
    public _MessageService: MessageService
  ) { this.sidebarVisible = false; 
    // console.log(translate.data);
  }    
model: any = {};
  closeResult: string; 
 
  
    onSubmit(f){
    this._MessageService.sendMessage(f).subscribe(() => {

    });
  this.toastr.successToastr("Gracias porcomunicarse con nosotros",'Mensaje Enviado');
    this.reset();
    }  
    reset() {

      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }

  ngOnInit() {
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }
  sidebarOpen() {
      const toggleButton = this.toggleButton;
      const html = document.getElementsByTagName('html')[0];
      setTimeout(function(){
          toggleButton.classList.add('toggled');
      }, 500);
      html.classList.add('nav-open');

      this.sidebarVisible = true;
  };
  sidebarClose() {
      const html = document.getElementsByTagName('html')[0];
      // console.log(html);
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      html.classList.remove('nav-open');
  };
  sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
  };
  isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());

      if( titlee === '/home' ) {
          return true;
      }
      else {
          return false;
      }
  }
  isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if( titlee === '/documentation' ) {
          return true;
      }
      else {
          return false;
      }
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
