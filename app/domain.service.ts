import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Domain } from './domain';


@Injectable()
export class DomainService {
	
	// private domainsUrl = 'app/domains';
	private domainsUrl = 'http://localhost:8080/DomainServiceApi/rest/domains?callback=JSONP_CALLBACK';

	constructor(private jsonp: Jsonp) {}
	
	getDomains(): void {

		this.jsonp.get('http://localhost:8080/DomainServiceApi/rest/domains?callback=JSONP_CALLBACK')
			.toPromise()
			.then(response => console.log("Result is: " + response))
			.catch(this.handleError);

	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}