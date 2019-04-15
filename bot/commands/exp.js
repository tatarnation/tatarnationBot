var discord = require("discord.js"), uInfo = require("../events/base_userinfo.js"),dbcheck = require("../functions/addUserToBase.js"),fs = require("fs");

module.exports = {
    "type":"ANY",
    function:async function(message,ureq){
        let GlobalUsers = await JSON.parse(fs.readFileSync('./base/user.json', 'utf8'));
        dbcheck(message,GlobalUsers);
            const Canvas = require('canvas');
            const snekfetch = require('snekfetch');
            const gm = require('gm');
            const canvas = Canvas.createCanvas(500, 200)
            const ctx = canvas.getContext('2d')
            Canvas.registerFont('./font.ttf', { family: 'Font' })
            const { body: buffer } = await snekfetch.get(message.member.user.displayAvatarURL);
            const avatar = await Canvas.loadImage(buffer);
            gm(buffer)
                .resize(1000,500)
                .blur(200, 10)
                .modulate(40,5,100)
                .write("expG.png",async(err)=>{
                    await Canvas.loadImage("./expG.png").then(imgBuf=>{
                        ctx.drawImage(imgBuf, 0, 0, 500, 200);      
                    });
                    ctx.font = '12px Font';
                    ctx.fillStyle = '#000';
                    ctx.fillText('experience', canvas.width/2-98,canvas.height/2+2);
                    ctx.font = '12px Font';
                    ctx.fillStyle = '#ffffff';
                    ctx.fillText('experience', canvas.width/2-100,canvas.height/2);
                    ctx.font = '12px Font';
                    ctx.fillStyle = '#000';
                    ctx.fillText(`${GlobalUsers[message.author.id].experience}`, canvas.width/2+44,canvas.height/2+2);
                    ctx.font = '12px Font';
                    ctx.fillStyle = '#ffffff';
                    ctx.fillText(`${GlobalUsers[message.author.id].experience}`, canvas.width/2+42,canvas.height/2);
                    ctx.beginPath();
                    ctx.lineTo(canvas.width/2-130/2,canvas.height/2-130/2);
                    ctx.lineTo(canvas.width/2-130/2/2+32,canvas.height/2+130/2);
                    ctx.lineTo(canvas.width/2+130/2,canvas.height/2-130/2);
                    ctx.closePath();
                    ctx.clip();
                    ctx.drawImage(avatar,canvas.width/2-130/2,canvas.height/2-130/2,130,130);
                    const attachment = new discord.Attachment(canvas.toBuffer(), 'exp.png');
                    message.channel.send(attachment);
                })                     
    }
};