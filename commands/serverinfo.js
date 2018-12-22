const Discord = require("discord.js");
const moment = require("moment");
exports.run = async (client, message, args) => {
  let emojis = message.guild.emojis;
  if (!emojis) emojis = "😦";
  let embed = await new Discord.RichEmbed()
            .setAuthor("Informações do servidor")
            .setThumbnail(message.guild.iconURL)
            .setColor([54, 57, 63])
            .addField("Nome", message.guild.name)
            .addField('Criador' , message.guild.owner , true)
            .addField("Membros", message.guild.memberCount)
            .addField('Canais', message.guild.channels.size ,true)
            .addField("Criado em", moment(message.guild.createdAt).format("DD/MM/LLLL"))
            .addField("Quando você entrou", moment(message.member.joinedAt).format("DD/MM/LLLL"))
            .addField('Emojis' , emojis)
            .addField('Cargos', message.guild.roles.filter(role => role.id !== message.guild.id).map(role => role.name).join(', '), true);

   await message.channel.send(embed);
}