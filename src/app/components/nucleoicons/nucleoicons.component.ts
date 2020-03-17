import { Component, OnInit, Inject, ElementRef, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-nucleoicons',
    templateUrl: './nucleoicons.component.html',
    styleUrls: ['./nucleoicons.component.scss']
})
export class NucleoiconsComponent implements OnInit, OnDestroy {

    constructor( private element : ElementRef) {}

    ngOnInit() {
        const body = document.getElementsByTagName('app-nucleoicons')[0];
        let navbar = document.getElementsByTagName('app-navbar')[0].children[0];

        body.classList.add('demo-icons');
    }

    ngOnDestroy(){
        let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    }
}
