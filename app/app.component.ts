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
			.subscribe(
				data => {
					this.domains = <Domain[]>data.domain;
				},
				error => console.log(error)
			)
	}

	ngOnInit(): void {
		this.getDomains();
	}
}
