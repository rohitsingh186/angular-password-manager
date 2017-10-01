import { Component, OnInit } from '@angular/core';

import { Domain } from './domain';
import { DomainService } from './domain.service'; 


@Component({
	moduleId: module.id,
  	selector: 'list_domain',
  	templateUrl: 'list_domain.component.html'
})



export class ListDomainComponent implements OnInit {

	constructor( private domainService: DomainService ) {}

	domains: Domain[];

	getDomains(): void {
		this.domainService.getDomains()
			.then((data) => {
				this.domains = <Domain[]>data;
			})
	  		.catch((error) => {
	    		console.log(error);
	  		});
	}

	ngOnInit(): void {
		this.getDomains();
	}
}
