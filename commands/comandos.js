var discord = require("discord.js");
exports.run = async (client, message, args) => {
  let yt = ":download1:521646285930102786";
  let clock = ":502531444f:521650786518827018";
  var reac = new discord.RichEmbed()
  .setAuthor("Escolha uma opção")
  .setColor("RANDOM")
  .setThumbnail(message.guild.iconURL)
  .setDescription(`👮-Moderação\n<${clock}>-Utilitários\n<${yt}>-Música`)
  .setTimestamp(Date.now());
  message.channel.send(reac).then(async reacm => {
   await reacm.react(clock);
   await reacm.react("👮"); 
   await reacm.react(yt); 
   setTimeout(() => {reacm.delete()}, 40000); 
   client.on('messageReactionAdd', (reaction, user) => {
       if(reaction.message.id !== reacm.id) return;
       if(reaction.emoji.name === "502531444f" && user.id === message.author.id) {
            let util = new discord.RichEmbed()
            .setAuthor("Comandos utilitários")
            .setColor("RANDOM")
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setDescription("***ajuda***- ajuda.\n***gif***- procura por um gif mencionado.\n***ping***- mostra meu ping.\n***serverinfo***- informações do servidor.\n***soco***- larga um soco no membro mencionado.\n***voadora***- larga uma voadora na cara do membro mencionado. \n***fakemsg***- manda mensagem em nome de um membro mencionado.\n***avatar***- mostra a foto de perfil do membro mencionado.\n***primeiraspalavras***- escreve as primeiras palavras mencionadas\n***laranjo***- faz o laranjo falar o que você quer (testa aí)\n***host***- informações sobre a host do bot.\n***gay***- as probabilidades do membro mencionado ser gay.\n\n**Prefixo:** b!")
            .setTimestamp(Date.now());
         reacm.edit(util);
         reaction.remove(message.author.id);
       } else { 
         if (reaction.emoji.name === "👮" && user.id === message.author.id){
            let mod = new discord.RichEmbed()
            .setAuthor("Comandos moderativos")
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription("***mute***- muta o membro mencionado.\n***kick***- expulsa o membro mencionado.\n***ban***- bane o membro mencionado.\n***del***- delete determinado número de mensagens.\n***muteall***-muta todos os membros em todos os canais.\n\n**Prefixo:** b!")
            .setTimestamp(Date.now());
           reacm.edit(mod);
           reaction.remove(message.author.id);
       } else { 
   
         if (reaction.emoji.name === "download1" && user.id === message.author.id){
            let mod = new discord.RichEmbed()
            .setAuthor("Comandos de música")
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription("***tocar***- toca a música argumentada.\n***pular***- pula a música para a próxima.\n***tocando***- mostra o que está tocando atualmente.\n***voltar***- volta à música anterior.\n***parar***- para a música atual.\n***volume***- ajusta o volume com relação ao número argumentado.\n\n**Prefixo:** b.")
            .setTimestamp(Date.now());
           reacm.edit(mod);
           reaction.remove(message.author.id);
       }
      
    }   
    }         
    });
  });

}



//👮