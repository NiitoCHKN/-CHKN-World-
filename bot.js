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


client.on('ready', () => {
client.user.setPresence({ game: { name: 'CHKN World', type: 0 } });
  
  });
  

client.on("message", message => {
  let points = JSON.parse(fs.readFileSync(__dirname + "/point.json"));
  const prefix = "+";

  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;


  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.8 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`Complimenti! Sei #CHKNLivellato! Hai raggiunto il livello **${curLevel}**! Ora puoi considerarti una persona più importante all'interno del CHKN World :)`);
  }

  if (message.content.startsWith(prefix + "level")) {
    message.reply(`Vuoi sapere che liv sei eh? Non essere ansioso, c'è sempre tempo per diventare il migliore di tutti! Comunque, sei livello ${userData.level}, con ${userData.points} punti exp.`);
  }
points[message.author.id] = userData;
  fs.writeFile("./point.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });

});


client.login(process.env.BOT_TOKEN);
