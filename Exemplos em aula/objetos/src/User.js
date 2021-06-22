export class User {
    #id;
    #name;
    #messages;

    constructor(id, name){
        this.#id = id;
        this.#name = name;
        this.#messages = [];
    }

    getId(){
        return this.#id;
    }
    setId(id){
        return this.#id = id;
    }

    getName(){
        return this.#name;
    }
    setName(name){
        return this.#name = name;
    }

    getMessages(){
        return this.#messages;
    }
    setMessage(message){
        return this.#messages.push(message);
    }
}