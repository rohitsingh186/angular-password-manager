import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Config } from './config/config';


@Injectable()
export class DomainService {

	constructor(private http: Http, private config: Config) {}
	
	getDomains(): Promise<any> {
		return new Promise((resolve, reject)=> {
			this.config.getEnv('baseUrl')
				.then((domainsIp) => {
	    			this.http.get('http://' + domainsIp + ':8081/domains')
	    				.toPromise()
	    				.then((data) => {
							resolve(data.json());
				  		})
				  		.catch((error) => {
				    		console.log(error);
							reject(error);
		  				});
		  		})
		  		.catch((error) => {
		    		console.log(error);
					reject(error);
		  		});
		});
	}
}
