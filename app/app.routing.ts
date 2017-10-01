import { Routes, RouterModule } from '@angular/router';
import { AddDomainComponent } from "./add_domain.component";
import { ListDomainComponent } from "./list_domain.component";


const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/list_domain', pathMatch: 'full' },
    { path: 'list_domain', component: ListDomainComponent },
    { path: 'add_domain', component: AddDomainComponent },
];


export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);