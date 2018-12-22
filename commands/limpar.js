exports.run = async (client, message, args, simpleEmbed) => {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.channel.send("Por favor, coloque um número entre 2 e 100 para o delete de mensagens.");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.channel.send(`Delete falhou porque: ${error}`));
    } else {
        message.reply("você não tem permissão.");
        }
    }
