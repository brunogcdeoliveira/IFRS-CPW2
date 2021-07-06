"use strict";

import { User } from "./src/User.js"
// import { Channel } from "./src/Channel";
// import { Message } from "./src/Message";
import { TextMessage } from "./src/TextMessage.js";
// import { VoiceMessage } from "./src/VoiceMessage";

let user = new User(1, "Rodrigo");
let textMessage = new TextMessage(1, "mensagem de texto");

user.setMessage(textMessage);

console.log(user.getId());
console.log(user.getMessages()[0].getText());