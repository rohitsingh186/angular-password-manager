import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent }   from './app.component';
import { DomainService } from './domain.service';
import { HttpService } from './http.service';



@NgModule({
	imports: [ 
		BrowserModule,
		HttpModule,
		JsonpModule
	],
	declarations: [ AppComponent ],
	bootstrap:    [ AppComponent ],
  	providers: [DomainService, HttpService]
})




export class AppModule { }
