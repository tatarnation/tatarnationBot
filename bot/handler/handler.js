var commands = require("./commands.js");

module.exports = function(message){
    if(!message.content.startsWith("d")) return;
    let ureq = message.content.substring("d".length).split(" ");
    let commandReturn = commands(message,ureq);
    commandReturn(message,ureq);
}