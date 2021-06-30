export class Channel{
    #id;
    #hash;
    #messages;
    #users

    constructor(id, message){
        this.#id = id;
        this.#message = [];
        this.#user = [];
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
        return this.#messages.push(message);
    }

    getUsers(){
        return this.#cusers;
    }
    setUser(user){
        return this.#users.push(user);
    }
}