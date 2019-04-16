var fs = require("fs");

module.exports = function dbcheck(message,Users){
    try{
        let Users = JSON.parse(fs.readFileSync(`./base/${message.guild.id}_users.json`, 'utf8'));
    }catch(err){
        let Users;
        if(!Users)Users = {};
        fs.writeFileSync(`./base/${message.guild.id}_users.json`, JSON.stringify(Users));
    }
    if(!Users[message.author.id])Users[message.author.id] = {};
    if(!Users[message.author.id].experience)Users[message.author.id].experience = 0;
    fs.writeFileSync(`./base/${message.guild.id}_users.json`, JSON.stringify(Users));
}