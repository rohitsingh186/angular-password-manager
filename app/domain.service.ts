import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Domain } from './domain';


@Injectable()
export class DomainService {
	
	private domainsUrl = 'http://localhost:8080/DomainServiceApi/rest/domains';

	constructor(private http: Http) {}
	
	getDomains() {
		return this.http.get(this.domainsUrl)
			.map(res => res.json());					
	}


	private handleError(error: Response) {
		console.error('An error occurred', error); // for demo purposes only
		return Observable.throw(error.json().error || 'Server error');
	}

}
