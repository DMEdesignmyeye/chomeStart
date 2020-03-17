import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit, OnDestroy {
    data : Date = new Date();

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('blog-page');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('bg-danger');
      navbar.classList.add('navbar-transparent');

  }
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('blog-page');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('bg-danger');
      navbar.classList.remove('navbar-transparent');
  }

}
