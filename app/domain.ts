export class Domain {
    id: string;
    name: string;
    userName: string;
    password: string;

    constructor(id, name, userName, password) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.password = password;
    }

    getId(): string {
        return this.id;
    }

    setId(id): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    getUserName(): string {
        return this.userName;
    }

    getPassword(): string {
        return this.password;
    }
}