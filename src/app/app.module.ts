import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule,Routes } from '@angular/router';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { ProductModule } from './product/product.module';
import { IndexModule } from './index/index.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarModule } from "./shared/navbar/navbar.module";
import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';  
import { SharedModule } from './shared/shared.module'; 
import { TranslateService } from './shared/services/translate.service'; 
import { MessageService } from './shared/services/message.service';
import { PresentationModule } from './presentation/presentation.module';
import { ProductComponent } from './product/product.component';
import { routes } from './app.routing';

import { AngularFirestoreModule } from 'angularfire2/firestore';
/* to load and set en.json as the default application language */
export function setupTranslateFactory(service: TranslateService): Function {
	return () => service.use('en');
}
 
import { ToastrModule} from 'ng6-toastr-notifications';

import { HttpClientModule } from '@angular/common/http';  
 import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        AppComponent
        
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule.forRoot(routes),
        BrowserModule, 
        UserModule,
        
        ToastrModule.forRoot(),
        ProductModule, 
        IndexModule,
		AngularFirestoreModule,
        PresentationModule,
        SectionsModule,
        NavbarModule,
        HttpClientModule,
        HttpModule,
        ComponentsModule,
        ExamplesModule
    ],
	providers: [ ProductComponent, 
    TranslateService,
    MessageService,
		{
            provide: APP_INITIALIZER,
            
			useFactory: setupTranslateFactory,
			deps: [ TranslateService ],
			multi: true
		}
	],
    bootstrap: [AppComponent],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
