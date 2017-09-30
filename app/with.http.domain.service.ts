// Using Jsonp
import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Domain } from './domain';


@Injectable()
export class DomainService {
    
    // private domainsUrl = 'app/domains';
    private domainsUrl = 'http://localhost:8081/domains';

    constructor(private jsonp: Jsonp) {}
    
    getDomains(): void {

        this.jsonp.get('http://localhost:8081/domains')
            .toPromise()
            .then(response => console.log("Result: " + response),
                err => console.log("Reject: " + err));

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}

/**


















// Using Http
/**
import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Domain } from './domain';


@Injectable()
export class DomainService {
    
    // private domainsUrl = 'app/domains';
    private domainsUrl = 'http://localhost:8081/domains';

    constructor(private http: Http) {}
    
    getDomains(): void {

        this.http.get('http://localhost:8081/domains')
            .toPromise()
            .then(response => console.log("Success !"),
                err => console.log("Error"))
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
*/