var fs = require("fs");

module.exports = function dbcheck(message,GlobalUsers){
    if(!GlobalUsers[message.author.id])GlobalUsers[message.author.id] = {};
    if(!GlobalUsers[message.author.id].experience)GlobalUsers[message.author.id].experience = 0;
    fs.writeFileSync('./base/user.json', JSON.stringify(GlobalUsers));
}