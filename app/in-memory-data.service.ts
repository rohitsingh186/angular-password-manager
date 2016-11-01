import { InMemoryDbService } from 'angular-in-memory-web-api';



export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let domains = [
            {id: 1, name: 'Gmail', userName: 'rohitsingh17219@gmail.com', password: 'Qwerty@123$'},
            {id: 2, name: 'Facebook', userName: 'rohitFb', password: 'Qwerty@123$'},
            {id: 3, name: 'Skype', userName: 'rohitSkype', password: 'Qwerty@123$'},
            {id: 4, name: 'Microsoft', userName: 'rohitsingh17219@microsoft.com', password: 'Qwerty@123$'},
            {id: 5, name: 'LinkedIn', userName: 'rohitLinkedIn', password: 'Qwerty@123$'},
            {id: 6, name: 'Instagram', userName: 'rohitInstagram', password: 'Qwerty@123$'}
        ];
        
        return {domains};
    }
}
