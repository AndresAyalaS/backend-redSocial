export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    alias: string;
}

export class UserModel {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public birthDate: Date,
        public alias: string
    ) {}
}