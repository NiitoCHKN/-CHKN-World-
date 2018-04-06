const Discord = require('discord.js');
const bot = new Discord.Client ();

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('guildMemberAdd', member => {
  member.user.send("Messaggio che verrà inviato in MP");
       console.log(`${member.user.username} has joined`);
});

bot.login(process.env.BOT_TOKEN);
