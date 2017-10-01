import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { AddDomainComponent } from './add_domain.component';
import { ListDomainComponent } from './list_domain.component';
import { DomainService } from './domain.service';
import { Config } from './config/config';
import { CONST_ROUTING } from './app.routing'; 



@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		CONST_ROUTING
	],
	declarations: [ AppComponent, AddDomainComponent, ListDomainComponent ],
	bootstrap:    [ AppComponent ],
  	providers: [DomainService, Config]
})


export class AppModule { }