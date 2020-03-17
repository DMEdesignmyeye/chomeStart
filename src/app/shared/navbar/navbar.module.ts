 
import { NavbarComponent } from "./navbar.component";
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed! 
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { ProductRoutes } from "../../product/product.routing"; 
 
import { SharedModule } from "../shared.module";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';  
import { ToastrModule } from "ng6-toastr-notifications";
@NgModule({
    declarations: [ 
        NavbarComponent
    ],
    imports: [ 
        BrowserAnimationsModule,
        NgbModule, 
        ToastrModule.forRoot(),
        BrowserModule,  
        HttpClientModule, 
        HttpModule,
        SharedModule,
        RouterModule.forChild(ProductRoutes), 
        NgbModule
    ],  
    exports: [
        NavbarComponent
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class NavbarModule { }
