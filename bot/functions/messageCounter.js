var fs = require("fs");

module.exports = async function(message){
    try{
        let Users = JSON.parse(fs.readFileSync(`./base/user.json`, 'utf8'));
    }catch(err){
        let Users;
        if(!Users)Users = {};
        fs.writeFileSync(`./base/user.json`, JSON.stringify(Users));
    }
    let Users = JSON.parse(fs.readFileSync(`./base/user.json`, 'utf8'));
    if(!Users[message.author.id])Users[message.author.id] = {};
    if(!Users[message.author.id].experience)Users[message.author.id].experience = 0;
    if(!Users[message.author.id].messages)Users[message.author.id].messages = 0;
    Users[message.author.id].messages += 1;
    fs.writeFileSync(`./base/user.json`, JSON.stringify(Users));
}