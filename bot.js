const Discord = require('discord.js');
const bot = new Discord.Client ();

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('guildMemberAdd', member => {
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("**● CHI SIAMO**");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("I **CHKN** nascono un po' per scherzo un po' per pazzia nei primi mesi del 2017. Come? Ve lo spiego subito.");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("**Niito**, che è anche la persona che sta scrivendo questo testo e che ha fondato il tutto, dopo aver acquistato Dead by Daylight nel settembre 2017 grazie ad amici di amici, conosce un ragazzo di nome **LycanCHKN**. Da come si può intuire, l'ispirazione di creare una community con questo nome, arriva proprio da lui. Dopo averlo conosciuto, continuiamo a giocare insieme, per giorni, settimane, **mesi**. Il punto di ritrovo era sempre lo stesso, il ts di PrimeSquad. Ogni giorno, dal primo pomeriggio fino al darci la buonanotte, giocavamo a Dead by Daylight. Il menù era sempre quello, ogni giorno, per mesi: **Ts->Dbd**. ");
  member.user.send("");
  member.user.send("");
  member.user.send("Mentre tutto questo rendeva le nostre giornate piacevoli e divertenti, conosco **Vetto** che fin da subito ci invitò nel suo server Teamspeak. Da quel momento in poi, il menù pomeridiano subì un'inevitabile cambiamento, che segnò anche l'inizio del CHKN World e della Nitocrazia.");
  member.user.send("Dall'insediamento nel teamspeak di Vetto, comincio a conoscere tanti ragazzi, alcuni dei quali sono poi diventati pilastri di questa **community.**");
  member.user.send("E la formula era sempre la stessa:");
  member.user.send("**Conosci Niito**->Ti invita nel Ts->Capisci che una volta aver conosciuto Niito non puoi più **scappare** via->Continui a giocare con lui e gli altri sul suo ts **fino a diventare parte del tutto.**");
  member.user.send("");
  member.user.send("");
  member.user.send("E siamo arrivati ad oggi, che siamo talmente potenti da permetterci anche un server discord.");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("**● REGOLAMENTO**");
  member.user.send("");
  member.user.send("");
  member.user.send("Ogni community che si rispetti ha bisogno di regole per andare avanti in modo pacifico e sereno.");
  member.user.send("");
  member.user.send("");
  member.user.send("Ma a noi non ce ne frega proprio un cazzo, perchè tanto i regolamenti nessuno li legge, e poi le regole sono sempre le stesse, non c'è bisogno che le scrivo per fare bella figura sui nuovi che entrano, l'unica cosa che posso dirti è:");
  member.user.send("Sei davvero sicuro di volerne far parte? Ti avverto che una volta entrati, non si esce. La Nitocrazia ti rimarrà impressa per sempre.");
  member.user.send("");
  member.user.send("");
  member.user.send("");
  member.user.send("🐔🥂 Se sei sicuro, accomodati, occhio però, qui il tempo scorre veloce. 🐔🥂");
         console.log(`${member.user.username} has joined`);
});


bot.on('ready', () => {
 bot.user.setPresence({ game: { name: 'CHKN World', type: 0 } });
  
  });
  
client.on('channelCreate', channel => {
console.log ('A ${channel.type} by the name of ${channel.name} and was
${channel.createAt} with the ID of ${channel.id}');
channel.sendMessage('Hai creato con successo un nuovo canale.');
  

bot.login(process.env.BOT_TOKEN);
