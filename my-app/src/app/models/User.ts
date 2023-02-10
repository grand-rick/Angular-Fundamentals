export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;
    phone: string;
    website: string;
    company: object;

    constructor () {
        this.id = 1;
        this.name = '';
        this.username = '';
        this.email = '';
        this.address = {};
        this.phone = '';
        this.website = '';
        this.company = {};
    }
}