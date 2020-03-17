// Core Dependencies
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule,Routes } from '@angular/router'; 
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { LoginbraComponent } from './loginbra/loginbra.component';
import { ProductModule } from '../product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { IndexRoutes } from './index.routing'; 
import { HttpClientModule} from '@angular/common/http';
 
import { ToastrModule } from "ng6-toastr-notifications"; 
import { HttpModule } from '@angular/http'; 


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BestProductComponent } from 'app/product/best-product/best-product.component';

@NgModule({
	imports: [ CommonModule,ProductModule, ToastrModule.forRoot(),BrowserModule, HttpModule,  HttpClientModule, BrowserAnimationsModule,  RouterModule.forChild(IndexRoutes), NgbModule, SharedModule ],
	declarations: [ IndexComponent , LoginComponent, LoginbraComponent , FooterComponent ], 
	schemas: [ NO_ERRORS_SCHEMA ],
	exports: [ FooterComponent ],
providers: [BestProductComponent]
})
export class IndexModule {}
