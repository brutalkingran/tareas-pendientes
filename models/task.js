export default class Task {
    constructor ( id, title, description , completed, suspended ) {
        if (!id || !title) {
            throw new Error("ID and título where");
        }
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.suspended = suspended;
    }

    complete() {

    }

    suspend() {

    }
}