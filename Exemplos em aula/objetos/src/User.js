export class User {
    #id;
    #name;
    #messages;
    #channels;

    constructor(id, name){
        this.#id = id;
        this.#name = name;
        this.#messages = [];
        this.#channels = [];
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

    getMessages() {
        return this.#messages;
    }

    setMessage(message) {
        this.#messages.push(message);
    }

    getChannels(){
        return this.#channels;
    }
    setChannel(channel){
        return this.#channels.push(channel);
    }

}