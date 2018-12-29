const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let status = [`https://media.discordapp.net/attachments/512371887259516955/528690093377060864/beijo1.gif`, "https://media.discordapp.net/attachments/512371887259516955/528690102394945546/aaaaaaa.gif", 'https://media.discordapp.net/attachments/512371887259516955/528690104177393674/sacanage.gif'];
    let random = status[Math.floor(Math.random() * status.length)]
 if(message.mentions.users.size < 1) return message.reply("`Você precisa mencionar alguém.`")
    let user = message.mentions.users.first()
 if(user.id == message.author.id) return message.channel.send("`Você não pode beijar a si mesmo.`")
    let botembed = new Discord.RichEmbed()
    .setDescription(`| ${message.author} deu um beijo no(a) ${user}`)
    .setColor('RANDOM')
    .setImage(`${random}`)
message.channel.send(botembed);
  }
module.exports.help = {
    name: "beijar"
}
