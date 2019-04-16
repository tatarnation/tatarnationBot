var fs = require("fs");

module.exports = function(message,ureq){
    let CommandsArray = ['by','exp','guildexp','ban','kick'];//ПРИ ДОБАВЛЕНИИ НОВОЙ КОМАНДЫ ОБЯЗАТЕЛЬНО ЗАПИСЫВАТЬ СЮДА, ИНАЧЕ РАБОТАТЬ НЕ БУДЕТ
    try{//Попытка зашгрузить глобальные настройки сервера, объявлено, но не используется
        let GuildSettings = JSON.parse(fs.readFileSync(`./base/${message.guild.id}.json`, 'utf8'));
    }catch(err){//Если файл отсутствует, то =>
        let GuildSettings;//создаем переменную глобальных настроек
        if(!GuildSettings)GuildSettings = {};//объявляем её как объект
        fs.writeFileSync(`./base/${message.guild.id}.json`, JSON.stringify(GuildSettings));//создаем или записываем в пустой файл переменную
    }
    try{
        let User = JSON.parse(fs.readFileSync(`./base/user.json`, 'utf8'));//глобальная база юзеров
    }catch(err){
        let User;//
        if(!User)User = {};
        fs.writeFileSync(`./base/user.json`, JSON.stringify(User));
    }
    let GuildSettings = JSON.parse(fs.readFileSync(`./base/${message.guild.id}.json`, 'utf8'));
    let find = false;
    var command;
    CommandsArray.forEach(Command=>{
        if(find) return;
        if(!GuildSettings[Command])GuildSettings[Command] = false;
        if(GuildSettings[Command] == false){
            console.log(`Функция выключена ${Command}`);
            return;
        }
        if(Command == ureq[0]){
            try{
                command = require(`../commands/${Command}.js`);    
            }catch(err){
                command = require(`../commands/return.js`); 
            }
            find = true;
            return;
        }
    });
    fs.writeFileSync(`./base/${message.guild.id}.json`, JSON.stringify(GuildSettings));
    if(command){
        let GuildSettings = JSON.parse(fs.readFileSync(`./base/${message.guild.id}.json`, 'utf8'));
        if(!GuildSettings.admin)GuildSettings.admin = "Admin";
        if(!GuildSettings.moderation)GuildSettings.moderation = "Moderator";
        fs.writeFileSync(`./base/${message.guild.id}.json`, JSON.stringify(GuildSettings));
        if(command.type == "ADMIN"){
            if(message.member.roles.find("name",`${GuildSettings.admin}`)){
                return command.function;      
            }else{
                return function(){};
            }
        }
        if(command.type == "MODERATION"){
            if(message.member.roles.find("name",`${GuildSettings.admin}`) || message.member.roles.find("name",`${GuildSettings.moderation}`) || message.guild.ownerID == message.author.id){
                return command.function;   
            }else{
                return function(){};
            }
        }
        if(command.type == "ANY"){
            return command.function;
        }
    } 
    if(!command) return function(){
        return;
    }
};


