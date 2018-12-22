const discord = require("discord.js");
exports.run = async (client, message, args) => {
  if(message.author.id !== "430213605343100931" || "512502762710237185" || "460561427971702787") return;
  var role = message.guild.roles.find(r => r.id === "512646694022807576");
  var messag = args.join(" ");
  
  if (!message) return message.reply("por favor escreva uma mensagem!");
  message.guild.members.forEach(m => {
    
    if(!m.roles.has(role)) return;
    
    var embed = new discord.RichEmbed()
    .setTitle("Aviso staff")
    .setColor([0, 0, 0])
    .setThumbnail(message.guild.iconURL)
    .setDescription(messag)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp(Date.now());
    m.send(embed);
  });

}