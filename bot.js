const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Oh') {
    msg.reply('Oh');
  }
});

client.on('message', msg => {
  if (msg.content === 'Dove cazzo eri? Ti sto chiamando da mesi, cellulare sempre spento..') {
    msg.reply('Ricordi quando ti avevo detto di aver vinto a quel programma di Jerry Scotti? Beh, con quei soldi sono andato in vacanza, non ti sono arrivate le cartoline? Ero ai Caraibi');
  }
});

client.on('message', msg => {
  if (msg.content === 'Si, e devo dire che attizzano il fuoco meglio del legno') {
    msg.reply('Ma come.. vabbè.. comunque, cosa volevi?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Come cosa volevo, il cazzo di spam di tremila messaggi quando si entra nel server, coglione') {
    msg.reply('Ah.. ma è perchè ho bisogno di attenzioni.. lo sai..');
  }
});

client.on('message', msg => {
  if (msg.content === 'Non me ne frega un cazzo, o risolvi o trovo un sostituto') {
    msg.reply('NONONONONO, provvedo subito, dammi un paio di secondi..');
  }
});

client.on('message', msg => {
  if (msg.content === 'Quindi?') {
    msg.reply('FATTO! Da adesso non spammerò più i messaggi quando qualcuno entrerà nel server.');
  }
});

client.on("guildMemberAdd", member => {
 const channel = member.guild.channels.get('204986384233136129');
  if (!channel) return;
 channel.send(`Buongiornoo! 🐓 ${member} Benvenuto nel ✪ CHKN World ✪!`);
});

client.on('guildMemberAdd', member => {
  member.user.send("**● CHI SIAMO**\n\nI **CHKN** nascono un po' per scherzo un po' per pazzia nei primi mesi del 2017. Come? Ve lo spiego subito.\n\n**Niito**, che è anche la persona che sta scrivendo questo testo e che ha fondato il tutto, dopo aver acquistato Dead by Daylight nel settembre 2016 grazie ad amici di amici, conosce un ragazzo di nome **LycanCHKN**. Da come si può intuire, l'ispirazione di creare una community con questo nome, arriva proprio da lui. Dopo averlo conosciuto, continuiamo a giocare insieme, per giorni, settimane, **mesi**. Il punto di ritrovo era sempre lo stesso, il ts di PrimeSquad. Ogni giorno, dal primo pomeriggio fino al darci la buonanotte, giocavamo a Dead by Daylight. Il menù era sempre quello, ogni giorno, per mesi:    **Ts->Dbd**.\n\nMentre tutto questo rendeva le nostre giornate piacevoli e divertenti, conosco **Vetto** che fin da subito ci invitò nel suo server Teamspeak. Da quel momento in poi, il menù pomeridiano subì un'inevitabile cambiamento, che segnò anche l'inizio del CHKN World e della Nitocrazia.\nDall'insediamento nel teamspeak di Vetto, comincio a conoscere tanti ragazzi, alcuni dei quali sono poi diventati pilastri di questa **community.**\n\nE la formula era sempre la stessa: **Conosci Niito**->Ti invita nel Ts->Capisci che una volta aver conosciuto Niito non puoi più **scappare** via->Continui a giocare con lui e gli altri sul suo ts **fino a diventare parte del tutto.**\nE siamo arrivati ad oggi, che siamo talmente potenti da poterci permettere anche un server discord.\n\n\n**● REGOLAMENTO**\n\nOgni community che si rispetti ha bisogno di regole per andare avanti in modo pacifico e sereno.\nMa a noi non ce ne frega proprio un cazzo, perchè tanto i regolamenti nessuno li legge, e poi le regole sono sempre le stesse, non c'è bisogno che le scrivo per fare bella figura sui nuovi che entrano.");
  member.user.send("\n\nL'unica cosa che posso dirti è: Sei davvero sicuro di volerne far parte? Ti avverto che una volta entrati, non si esce. La Niitocrazia ti rimarrà impressa per sempre.\n\n🐔🥂 Se sei sicuro, accomodati, occhio però, qui il tempo scorre veloce. 🐔🥂");         
           console.log(`${member.user.username} has joined`);
});


client.on('ready', () => {
client.user.setPresence({ game: { name: 'CHKN World', type: 0 } });
  
  });
  

client.login(process.env.BOT_TOKEN);
