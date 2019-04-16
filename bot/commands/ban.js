module.exports = {
    "type":"MODERATION",
    function:function name(message,ureq){
        let reason = "";
        ureq.forEach(a => {
            if(a == "ban")return;
            if(a == `<@${message.mentions.users.first().id}>`) return;
            reason += ` ${a}`;
        });
        reason += ` Banned by ${message.author.tag} => id:${message.author.id}`;
        message.guild.members.find("id",message.mentions.users.first().id).ban(reason);
    }
}