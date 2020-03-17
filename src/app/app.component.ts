import { Component, OnInit, Inject, ElementRef, ViewChild, HostListener } from '@angular/core';

import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent, DOCUMENT } from '@angular/common';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { UserService } from "./shared/services/user.service"; 


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
    private _router: Subscription;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    url: string; 

    constructor( private userService: UserService) {}


    ngOnInit() { }


    setGeoLocation(position: any) {
      this.userService.setLocation(
        position["coords"].latitude,
        position["coords"].longitude
      );


    }
}
