var discord = require("discord.js"),handler = require("./handler/handler.js"), expForVoice = require("./functions/experienceForVoice.js");
var status = require("./events/base_botstatus.js");
var connection = require("./events/connection.js");
var client = new discord.Client();

client.on("ready",()=>{
    client.user.setStatus("dnd");
    client.user.setActivity("tatarnation power");
})

client.on("voiceStateUpdate",(oldM,newM)=>{
    expForVoice(oldM,newM);
});

client.on("message",message=>{
    handler(message);
});

client.login("NTY2MzA2Nzg2NDA0MjA0NTU0.XLTIeA.Szx4svSlmDJF2LRZ4l5_CscS424");