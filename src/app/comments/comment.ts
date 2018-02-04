export class Comment {
    id: string;
    userName: string;
    commentText: string;
    date: string;

    constructor (id, userName, commentText, date) {
        this.id = id;
        this.userName = userName;
        this.commentText = commentText;
        this.date = date;
    }
}
