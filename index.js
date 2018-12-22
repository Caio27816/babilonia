const Discord = require("discord.js");
const http = require('http');
const express = require('express');
const moment = require("moment");
moment.locale("pt-br");
const app = express();
var string = moment(Date.now()).format("LTS");
app.get("/", (request, response) => {
  console.log(`${string} pinged!`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://babilonia-bot.glitch.me/`);
}, 110000);
const client = new Discord.Client();
client.prefix = "b!";
client.on("ready", async () => {
  console.log("Bot iniciado no Babilônia!");
      var persons,
    sv;
    sv = client.guilds.get("512371887259516952");
  let linkinvite = await sv.channels.get("516667991509696552").createInvite({maxAge: 0});
  console.log("Link invite:\n"+linkinvite);
  function changing_status() {
    let status = ['o comando b!ajuda', 'o povo brigar', 'o Jornal Nacional', 'a destuição do mundo'];
    var random = status[Math.floor(Math.random() * status.length)];
    client.user.setActivity(random, { type: "WATCHING"});
    persons = sv.memberCount;

   const mem =  sv.channels.get("516667991509696552");
   const nm = mem.name;
   var nmm = nm.split(" ");
   let nmi = parseInt(nmm[1]);
   if(nmi !== persons) {   
     console.log("Canal mudado para: "+persons+"!");
     mem.setName(`ᴍᴇᴍʙʀᴏs: ${persons}`);
     return;
   }
}
    setInterval(changing_status, 9000);
 
  client.on("message", async message => {
 if(message.channel.id === '512383245611171860') return message.react('👍').then(message.react('👎'));
 if (message.content.includes("https://discord.gg/") || message.content.includes(".com") || message.content.includes("www") || message.content.includes("http")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            message.reply("❌ **Você não pode divulgar aqui!**");}}
});
  setInterval(() => {
      

      let agora = moment(Date.now()).format("LTS");
      
      if(agora === "10:07:50 AM") return client.users.get("460561427971702787").send("Mandou meia noite no horário de brasilia significa que funcionou se funcionou diga pro whoami falando que ele e foda '-'");
  
  }, 1);
  

});

client.on("guildMemberAdd", async member => {
   let avatar = member.user.avatarURL;
   if (!avatar) avatar = member.guild.iconURL;
   var novato = member.guild.roles.find("id", "514943239841906696");
   member.addRole(novato);
   var membro = member.guild.roles.find("id", "512401509112086528");
   var entrada = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setFooter(member.user.username, client.user.avatarURL)
   .setAuthor(member.user.username, avatar)
   .setTimestamp(Date.now())
   .setDescription("Validação do registro requerida! Aperte na reação e tenha acesso total ao Babilônia!");
   member.user.send(entrada).then(async msg => {
     await msg.react("✅");
     client.on("messageReactionAdd", async (reaction, user) => {
       if(reaction.message.id !== msg.id) return;
       if(user.id !== member.user.id) return;
       if(reaction.emoji.name === "✅") {
           await member.addRole(membro);
           await member.removeRole(novato);
           var validado = new Discord.RichEmbed()
           .setColor([139, 0, 0])
           .setFooter(member.user.username, avatar)
           .setTimestamp(Date.now())
           .setAuthor(member.user.username, avatar)
           .setDescription("Seja oficialmente bem-vindo ao Babilônia. Validação do registro confirmada!");
           member.user.send(validado);
           await msg.delete();
       }  
      });
     
     
   });
});

client.on("message", async message => {
 let msg = message.content.toLowerCase();
 if (message.author.bot) return undefined;
 if(message.channel.type === 'dm') return;
  if (message.content.indexOf(client.prefix) !== 0) return;
	const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  try {
    let commands = require(`./commands/${command}.js`);
    await commands.run(client, message, args);
  } catch (e) {
    console.log(e);
  }


});

/*client.on("messageReactionAdd", async (reaction, users) => {
  if(reaction.message.id !== "520562595770400798") return;
  var role = reaction.message.guild.roles.find(r => r.id === "512401509112086528");
  var userss = reaction.message.guild.members.get(users.id);
  userss.addRole(role);

});*/

client.login(process.env.TOKEN);