import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Domain } from './domain';
import { HttpService } from './http.service';
import { HttpRequestType } from './http.request.type';


@Injectable()
export class DomainService {
	
	// private domainsUrl = 'app/domains';
	private domainsUrl = 'http://172.17.0.2:8081/domains';

	constructor(private httpService: HttpService) {
  	}

  	
	
	getDomains(): void {

		let headers:Headers = new Headers ({});
		console.log(this.httpService.executeRequest('http://172.17.0.2:8081/domains', HttpRequestType.GET, headers));

	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}