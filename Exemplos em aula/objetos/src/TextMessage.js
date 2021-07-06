import { Message } from "./Message.js";

export class TextMessage extends Message {

    #text;

    constructor(id, text) {
        super(id);
        this.#text = text;
    }

    getText() {
        return this.#text;
    }

    setText(text) {
        this.#text = text;
    }

}