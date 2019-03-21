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

client.on('guildMemberAdd', member => {
<
<
  member.user.send("**● CHI SIAMO**");
<
<
<
<
<
  member.user.send("I **CHKN** nascono un po' per scherzo un po' per pazzia nei primi mesi del 2017. Come? Ve lo spiego subito.");
<>
<>
<>
<>
  member.user.send("");
  member.user.send("**Niito**, che è anche la persona che sta scrivendo questo testo e che ha fondato il tutto, dopo aver acquistato Dead by Daylight nel settembre 2016 grazie ad amici di amici, conosce un ragazzo di nome **LycanCHKN**. Da come si può intuire, l'ispirazione di creare una community con questo nome, arriva proprio da lui. Dopo averlo conosciuto, continuiamo a giocare insieme, per giorni, settimane, **mesi**. Il punto di ritrovo era sempre lo stesso, il ts di PrimeSquad. Ogni giorno, dal primo pomeriggio fino al darci la buonanotte, giocavamo a Dead by Daylight. Il menù era sempre quello, ogni giorno, per mesi: **Ts->Dbd**. ");
         console.log(`${member.user.username} has joined`);
           
});


client.on('ready', () => {
client.user.setPresence({ game: { name: 'CHKN World', type: 0 } });
  
  });
  

client.on('channelCreate', channel => {
console.log (`A ${channel.type} by the name of ${channel.name} and was ${channel.createAt} with the ID of ${channel.id}`);
channel.send(`Canale creato con successo!`);
});

client.login(process.env.BOT_TOKEN);
