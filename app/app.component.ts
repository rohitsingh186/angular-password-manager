import { Component, OnInit } from '@angular/core';

import { Domain } from './domain';
import { DomainService } from './domain.service'; 


@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	templateUrl: 'card.component.html'
})



export class AppComponent implements OnInit {

	constructor( private domainService: DomainService ) {}

	domains: Domain[];

	getDomains(): void {
		this.domainService.getDomains()
			.then(domains => {
				this.domains = domains;
			});
	}

	ngOnInit(): void {
		this.getDomains();
	}
}
