const config = require("../config.json");

exports.run = (client, message, args) => {
  let user = message.author;
  if (user.id !== '460561427971702787') return message.channel.send("Você precisa ser o whoami pra executar este comando.\nE, cá pra nós, você não é o whoami. :O :P");

  if (args.length === 0) return message.channel.send(`Use: \`${client.prefix}reload <command>\``);
  
  try {
    delete require.cache[require.resolve(`./${args[0]}`)];
  } catch (e) {
    return message.channel.send(`Comando não encontrado: ${args[0]}`);
  }
  
  message.channel.send(`Comando atualizado: ${args[0]}`);
  
}