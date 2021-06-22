export class Channel{
    #id;
    #hash;

    constructor(id, message){
        this.#id = id;
        this.#message = message;
    }

    getId(){
        return this.#id;
    }
    setId(id){
        return this.#id = id;
    }

    getMessage(){
        return this.#message;
    }
    setMessage(message){
        return this.#message = message;
    }
}