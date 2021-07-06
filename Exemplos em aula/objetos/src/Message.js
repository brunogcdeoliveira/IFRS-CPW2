export class Message {

    #id;

    constructor(id) {
        this.#id = id;
    }

    getId() {
        return this.#id;
    }

    setId(id) {
        this.#id = id;
    }
}