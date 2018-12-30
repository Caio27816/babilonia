const Discord = require("discord.js");
const http = require('http');
const express = require('express');
const moment = require("moment");
const superfetch = require("node-superfetch");
const Canvas = require("canvas");
moment.locale("pt-br");
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
  
  });
});

client.on("guildMemberAdd", async member => {
   let avatar1 = member.user.avatarURL;
   if (!avatar1) avatar = member.guild.iconURL;
   var novato = "514943239841906696";
   member.addRole(novato);
   var membro = "512401509112086528"
   var entrada = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setFooter(member.user.username, client.user.avatarURL)
   .setAuthor(member.user.username, avatar1)
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
           .setFooter(member.user.username, avatar1)
           .setTimestamp(Date.now())
           .setAuthor(member.user.username, avatar1)
           .setDescription("Seja oficialmente bem-vindo ao Babilônia. Validação do registro confirmada!");
           member.user.send(validado);
           await msg.delete();
	       
	     const canvas = Canvas.createCanvas(250, 250);
            const ctx = canvas.getContext('2d');
  
               ctx.fillStyle = "rgb(51, 51, 51)";
          ctx.fillRect(0, 0, 250, 250);
  
           const { body: a } = await snekfetch.get(user.avatarURL);
              const avatar = await Canvas.loadImage(a);
                ctx.drawImage(avatar, 10, 10, 230, 230);
  
  ctx.fillStyle = "rgb(0, 96, 128)";
  ctx.fillRect(205, 205, 40, 40);
  
  ctx.font = "3px Arial";
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillText(`Seja bem vindo ao Babilônia!`, 210, 240)
  
  const attach = new Discord.Attachment(canvas.toBuffer(), 'avatar.png');    
	       member.user.send(attach);
       }
      });
    });
  });
   client.on("guildMemberAdd", member => {
	 member.user.send("Agora, selecione seu estilo de jogos!").then(msg2 => {
	    let mine = ":minecraft:528222870472622081";
	     let samp = ":samp:528222974470258698";	 
	    msg2.react(mine);
	    msg2.react(samp);
	    client.on("messageReactionAdd", (reaction, user) => {
	      if(user.id !== member.user.id) return;
	      if(reaction.message.id !== msg2.id) return;   	     
	      if(reaction.emoji.name === "minecraft") {
		     member.addRole("519007073028145152");
		     member.user.send("Confirmado!");
	      } 
		if(reaction.emoji.name === "samp") {
		 member.addRole("527607883802607646");
		  member.user.send("Confirmado!");   
	      }
	    });   
       });     
      });

      client.on("guildMemberAdd", member => {
    let moment = require("moment");	
    let criou = member.user.createdAt;
    let criou_em = moment().diff(criou, 'days')
    if(!criou_em < 10) return;
    member.guild.members.forEach(staff => {
      if(!staff.roles.some(r=>["512646694022807576"].includes(r.id))) return;	    
      var mensagem = new Discord.RichEmbed()
     .setAuthor(member.user.tag+", suspeito!", member.user.avatarURL)
     .setColor("RANDOM")
     .setDescription("O usuário `"+member.user.tag+"`, que acabou de entrar no servidor, criou sua conta há menos de 10 (dez) dias!\nÉ `recomendável` checkar se realmente é um humano!\nEle foi nosso membro `"+member.guild.memberCount+"`!")
     .setFooter(member.user.tag+", recomendado checkar se o membro é um humano!", member.user.avatarURL)
     .setTimestamp(Date.now());
      staff.user.send(mensagem);
	return;     
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
