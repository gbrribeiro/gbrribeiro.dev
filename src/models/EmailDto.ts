export class EmailDto {
    email: string;
    name: string;
    message: string;

    constructor(email: string, name: string, message: string) {
        this.email = email;
        this.name = name;
        this.message = message;
    }
}