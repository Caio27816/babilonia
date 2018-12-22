exports.run = async (client, message, args) => {
  
  const channel = args[0];
  const msg = args[1];
  const reaction = args[2];
  const filter = (reaction, user) => reaction.emoji.name === reaction;
  message.channel.send(msg).then(msgs => {
    msgs.react(reaction);
    msgs.awaitReactions(filter, {
      time: 10000
    }).then(reacted => {
      user
    });
  });
  
  
} 