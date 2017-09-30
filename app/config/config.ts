import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class Config {
	_env: Object;

	constructor(private http: Http) {}

	load(): Promise<any> {
		return this.http.get('app/config/env.json')
			.toPromise();
	}

	getEnv(key: any): Promise<any> {
		return new Promise((resolve, reject)=> {
			this.load()	
				.then((data) => {
					resolve(data.json()['baseUrl']);
				})
		  		.catch((error) => {
		    		console.log(error);
					reject(error);
		  		});
		});
	}
};