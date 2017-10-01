import { Component } from '@angular/core';

import { Domain } from './domain';
import { DomainService } from './domain.service'; 


@Component({
	moduleId: module.id,
  	selector: 'add-domain',
  	templateUrl: 'add_domain.component.html'
})


export class AddDomainComponent {
	model = new Domain('placeholder-id', '', '', '');

	submitted = false;

    constructor( private domainService: DomainService ) {}

	onSubmit() {
        const body = {
            id: this.model.getId(),
            name: this.model.getName(),
            userName: this.model.getUserName(),
            password: this.model.getPassword()
        };

        console.log('***** Model before: ', this.model);

        this.domainService.addDomain(body)
            .then((data) => {
                this.model.setId(data.id);
            })
            .catch((error) => {
                console.log(error);
            });

        console.log('***** Model after: ', this.model);

		console.log("form submitted");
		this.submitted = true;
	}
}
