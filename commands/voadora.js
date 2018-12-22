var Discord = require('discord.js')

exports.run = (client,message,args)=>{
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply("Você não mencioniou ninguém")
    

 var deu = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setImage("https://thumbs.gfycat.com/FarawayAdmirableIndianabat-max-1mb.gif");

 message.channel.send(deu)

}