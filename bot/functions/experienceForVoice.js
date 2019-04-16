var fs = require("fs"), UserVoice = {};
module.exports = function(oldM, guildM){
    if(!guildM.voiceChannel){
        let user = JSON.parse(fs.readFileSync('./base/user.json', 'utf8'));
        let GuildUser = JSON.parse(fs.readFileSync(`./base/${guildM.guild.id}_users.json`, 'utf8'));
        if(!user[guildM.id]){
            user[guildM.id] = {};
            let startexp = 0;
            if(!user[guildM.id].experience)user[guildM.id].experience = startexp;
            user[guildM.id].experience = 0;
            if(!GuildUser[guildM.id]){
                GuildUser[guildM.id] = {};
                if(!GuildUser[guildM.id].experience)GuildUser[guildM.id].experience = 0;
            }
            fs.writeFileSync('./base/user.json', JSON.stringify(user));
            fs.writeFileSync(`./base/${guildM.guild.id}_users.json`, JSON.stringify(GuildUser));
        }else{
            return;
        }
    }

    if(guildM.voiceChannel){
        if(UserVoice[guildM.id + guildM.guild.id]) return;
        if(!UserVoice[guildM.id + guildM.guild.id])UserVoice[guildM.id + guildM.guild.id] = {};
        let user = JSON.parse(fs.readFileSync('./base/user.json', 'utf8'));
        let GuildUser = JSON.parse(fs.readFileSync(`./base/${guildM.guild.id}_users.json`, 'utf8'));
        if(!user[guildM.id]){
            user[guildM.id] = {};
            let startexp = 0;
            if(!user[guildM.id].experience)user[guildM.id].experience = startexp;
            user[guildM.id].experience = 0;
            if(!GuildUser[guildM.id]){
                GuildUser[guildM.id] = {};
                if(!GuildUser[guildM.id].experience)GuildUser[guildM.id].experience = 0;
            }
            fs.writeFileSync('./base/user.json', JSON.stringify(user));
            fs.writeFileSync(`./base/${guildM.guild.id}_users.json`, JSON.stringify(GuildUser));
        }
        //if(!UserVoice[guildM.id + guildM.guild.id])UserVoice[guildM.id + guildM.guild.id];
        if(!UserVoice[guildM.id + guildM.guild.id].id){
            setInterval(function(){
                if(!guildM.voiceChannel) return; //если пользователь покинет комнату
                if(guildM.selfMute) return;
                if(guildM.user.bot) return;
                let o = 0;
                /*guildM.voiceChannel.members.forEach(j=>{
                    if(j.user.bot) return;
                    o++;
                })
                if(o == 1){ 
                    o = 0;   
                    return;
                }*/
                let user = JSON.parse(fs.readFileSync('./base/user.json', 'utf8'));
                user[guildM.id].experience += 1;
                let GuildUser = JSON.parse(fs.readFileSync(`./base/${guildM.guild.id}_users.json`, 'utf8'));
                GuildUser[guildM.id].experience += 1;
                let roles = JSON.parse(fs.readFileSync(`./base/${guildM.guild.id}_roles.json`, 'utf8'));
                Object.keys(roles).forEach(role => {
                    if(user[guildM.id].exp >= roles[role].experience){
                        guildM.addRole(guildM.guild.roles.find("name",roles[role].name));
                    }
                });
                fs.writeFileSync('./base/user.json', JSON.stringify(user));
                fs.writeFileSync(`./base/${guildM.guild.id}_users.json`, JSON.stringify(GuildUser));
            }, 1000)
        }
    }

    //fs.writeFileSync('./base/user.json', JSON.stringify(user));
}