  exports.run = async (client, message, args) => {
  let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send(`:erro: | **${message.author.username}**, lamento mas eu não tenho permissão para usar esse comando.`);
    });

    invites = invites.array();

    let PossiveisConvites = [];
    invites.forEach(function(invites) {
        PossiveisConvites.push(`${invites.inviter}  - **${invites.uses}**`)
    })

    const LeaderBoard = new Discord.RichEmbed()
        .addField('Tabela de Convites: \n\n', `${PossiveisConvites.join('\n')}`)
        .setFooter(message.author.username, message.author.avatarURL)
    message.channel.send({embed: LeaderBoard});
}
}
