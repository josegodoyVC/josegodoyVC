if(message.content.startsWith(prefix + " blow")){ //tu prejix
  if (cooldown.has(message.author.id)) //el cooldowm para evitar spam
  return message.channel.send(`utilice el comando después de 10 segundos.`);
  cooldown.add(message.author.id);

  let golpe = ["https://cdn.discordapp.com/attachments/931438587264770098/982129331889381419/3e352ab8139c4a04c0dbd99543eb5d94.gif", "https://cdn.discordapp.com/attachments/931438587264770098/982129331595800617/golpe.gif", "https://cdn.discordapp.com/attachments/931438587264770098/982130827121025134/one-punch-man-anime.gif", "https://cdn.discordapp.com/attachments/931438587264770098/982130827636903957/84Ot.gif", "https://cdn.discordapp.com/attachments/931438587264770098/984088195471925329/b78f1e38c526689c5bb44c39eb31c70c.gif", "https://cdn.discordapp.com/attachments/931438587264770098/984088195807477760/spanking-foghorn.gif"]
  var random = golpe[Math.floor(Math.random() * golpe.length)] 
  message.delete()
 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('No tienes lo permisos necesarios para usar este comando.').then(m => m.delete({timeout: 10000}))
let user = message.mentions.users.first()
if(!user) return message.reply("Intenta mencionar a alguien la proxima vez!") //si no menciona a alguien retorna
  const embed = new Discord.MessageEmbed() //el embed
  .setDescription(`**${message.author.username}** Le esta pegando a **${user.username}**`) //la description
  .setColor('ff6e00') //el color
    .setFooter('¡que alguien los separe!') //un footer
  .setImage(`${random}`) //el math

  setTimeout(() => {
  cooldown.delete(message.author.id);
}, 10000);  //eliminamos el cooldown despues de pasar los 10s
  
   message.channel.send(embed) //para finalizar, enviamos el mensaje 
   
  }
