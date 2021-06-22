"use strict";

import {User} from "./src/User.js";
import {Message} from "./src/Message.js";
//import {Channel} from "./src/Channel";

let user = new User(1, "Bruno");
let message = new Message(1, "minha primeira mensagem");
//let channel = new Channel();

user.setMessage(message);

console.log(user.getId());
console.log(user.getMessages()[0].getText());