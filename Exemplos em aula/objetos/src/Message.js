export class Message{
    #id;
    #text;

    constructor(id, text){
        this.#id = id;
        this.#text = text;
    }

    getId(){
        return this.#id;
    }
    setId(id){
        return this.#id = id;
    }

    getText(){
        return this.#text;
    }
    setText(text){
        return this.#text = text;
    }
}