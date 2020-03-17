import { HttpClientModule } from '@angular/common/http';

import { RouterModule,Routes } from '@angular/router'; 
 import { Injectable } from '@angular/core';
 import { Http } from '@angular/http';
import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';

import { ToastrManager } from 'ng6-toastr-notifications';
import { BestProductComponent } from "../product/best-product/best-product.component";
 

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
declare const $: any;
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
 
export class IndexComponent implements OnInit  {


  private toggleButton: any;

model: any = {};


closeResult: string; 
  

  constructor(public toastr: ToastrManager, private modalService: NgbModal,public Best: BestProductComponent, public el: ElementRef) { }

  ngOnInit() {
    
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    body.classList.add('loading');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.Best.bestProducts;
  }
 
 


 
   
     @HostListener('window:scroll', ['$event'])
     checkScroll() {
        const componentPosition = document.getElementsByClassName('add-animation');
        const scrollPosition = window.pageYOffset;
        
        for(var i = 0; i < componentPosition.length; i++) {
            var rec = componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
            if ( scrollPosition + window.innerHeight >= rec ) {
                componentPosition[i].classList.add('animated');
            } else if ( scrollPosition + window.innerHeight * 0.8 < rec ) {
                componentPosition[i].classList.remove('animated');
            }
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