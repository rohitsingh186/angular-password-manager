import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Domain } from './domain';


@Injectable()
export class DomainService {

	private domainsUrl = 'app/domains';

	constructor(private http: Http) {}
	
	getDomains(): Promise<Domain[]> {
		return this.http.get(this.domainsUrl)
			.toPromise()
			.then(response => response.json().data as Domain[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}