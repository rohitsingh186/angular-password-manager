import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

// Imports for loading and configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { DomainService } from './domain.service';
import { HttpService } from './http.service';



@NgModule({
	imports: [ 
		BrowserModule,
		HttpModule,
		JsonpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	declarations: [ AppComponent ],
	bootstrap:    [ AppComponent ],
  	providers: [DomainService, HttpService]
})




export class AppModule { }
