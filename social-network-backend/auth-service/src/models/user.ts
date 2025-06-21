export interface User {
    id?: string; // UUID
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    alias: string;
    createdAt?: string;
}

export const UserSchema = {
    type: "object",
    properties: {
        id: { type: "string", format: "uuid" },
        email: { type: "string", format: "email" },
        password: { type: "string" },
        firstName: { type: "string" },
        lastName: { type: "string" },
        birthDate: { type: "string", format: "date" },
        alias: { type: "string" },
        createdAt: { type: "string", format: "date-time" },
    },
    required: ["email", "password", "firstName", "lastName", "birthDate", "alias"],
};
