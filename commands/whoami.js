exports.run = async (client, message, args) => {
 message.guild.members.forEach(member => {
   member.setNickname("");
 
 });
  
  }