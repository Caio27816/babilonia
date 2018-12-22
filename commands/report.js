exports.run = (client,message,args)=>{
    var acusado = message.mentions.users.first();
    var why = args.slice(1).join(" ");
    
    
    if(!acusado) return message.reply("coloque o nome do acusado e o motivo logo em seguida.");
    if(!why) return message.reply("coloque o nome do acusado e o motivo logo em seguida.");
    
    message.reply("sua denúncia foi enviada com sucesso.");
    client.channels.get("512838492301033502").send({embed: {
  color: 854646,
   title: "Denúncia",
  description: "Acusado: "+acusado+"."+" \n\n Acusador: <@" + message.author.id + ">. \n\nMotivo: "+why
}}); 
 
                                
        
  }      