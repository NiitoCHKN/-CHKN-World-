const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
 const channel = member.guild.channels.get('204986384233136129');
  if (!channel) return;
 channel.send(`Buongiornoo! 🐓 ${member} Benvenuto nel ✪ CHKN World ✪!`);
});

client.on('channelCreate', channel => {
console.log (`A ${channel.type} by the name of ${channel.name} and was ${channel.createAt} with the ID of ${channel.id}`);
channel.send(`Canale creato con successo!`);
});

client.on('guildMemberAdd', member => {
  member.user.send("<**● CHI SIAMO <I **CHKN** nascono un po' per scherzo un po' per pazzia un paio d'anni fa. Come? Ve lo spiego subito.**");
  member.user.send("<I **CHKN** nascono un po' per scherzo un po' per pazzia un paio d'anni fa. Come? Ve lo spiego subito.");
  
         console.log(`${member.user.username} has joined`);
});


client.on('ready', () => {
client.user.setPresence({ game: { name: 'CHKN World', type: 0 } });
  
  });
  

client.login(process.env.BOT_TOKEN);
