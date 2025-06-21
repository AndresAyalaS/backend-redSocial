export interface Post {
    id?: number;
    message: string;
    userId: number;
    createdAt: Date;
}

export class PostModel {
    constructor(public post: Post) {}

    static fromDatabase(row: any): PostModel {
        return new PostModel({
            id: row.id,
            message: row.message,
            userId: row.user_id,
            createdAt: row.created_at,
        });
    }
}