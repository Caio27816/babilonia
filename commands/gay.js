const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let gay = Math.round(Math.random() * 100);
    let w = message.mentions.users.first().username || message.author.username;  
    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **Eu acho que ${w} tem ${gay}% de chances de ser gay!** :gay_pride_flag:`);
    message.delete(10);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "gay"
};