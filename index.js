const Discord = require ("discord.js");

const Client = new Discord.Client;

const prefix = "!";

Client.on("ready", () => {
    console.log("Bot Opérationnel")
});

Client.on("message", message => {
   if(message.author.bot) return;

   if (message.content == prefix + ("twitch"))
   var embed = new Discord.MessageEmbed()
   
   .setColor("#0099ff")
   .setTitle("Mon Twitch")
   .setURL("https://twitch.tv/lesalut41")
   .setAuthor("LeSalut41", "https://i.imgur.com/Ny29I1X.jpg")
   .setDescription("Clique sur le Titre en bleu pour être redirigé(e) !");

   if(message.content == prefix + ("boxerve"))
   var embed = new Discord.MessageEmbed()

   .setColor("#0099ff")
   .setTitle("Boxerve")
   .setURL("https://discord.gg/X2WQbtT8qz")
   .setAuthor("LeSalut41", "https://i.imgur.com/Ny29I1X.jpg")
   .setDescription("Clique sur le Titre en bleu pour être redirigé(e) sur le discord de Boxerve RP !");

 
   message.channel.send(embed);

   if(message.content == prefix + ("epic")){
    message.channel.send("Mon Epic: EXALTY_Le_Salut")

        if(message.content == prefix + ("lacaverne")){
            message.channel.send("Adrien le BG ^^")

            if(message.content == prefix + ("noktan")){
                message.channel.send("Florian le BG ^^")
            }
        }
    }
});

Client.on("message", message =>{
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");

            if(args[1] == undefined){
                message.reply("Nombre de messages non ou mal défini. ");

            }
            else {
                let number = parseInt(args[1]);

                if(isNaN(number)){
                    message.reply("Nombre de message non ou mal défini.");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("Supression de " + messages.size + " messages réussi !");
                    }).catch(err => {
                        console.log("Erreur de Clear : " + err);
                    });
                }
                
            }
        }
    }

});






































Client.login("ODI2ODU3NzYzODQwOTgzMTAx.YGSlTQ.O7qqaPHJd6CL-OQ3gwkHEEI-7lM");