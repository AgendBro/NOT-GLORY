const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTQyNjYzODQzMTQzMjIxMjU5.D0MAnA.EMlVFnE1jC3aGGi7Sz-z_eBsoAc';

const discord = require('discord.js');
const djs = require('discord.js-commando');
const path = require('path');

global.listMembers = [];

bot.registry.registerGroup('alphatests' , 'alpha');
bot.registry.registerGroup('torn' , 'receipt');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn( __dirname + '/commands');

bot.on('guildMemberAdd', function(member)
{

});
   

bot.on('message' , function(message){
    
    var word1 = message.content.toUpperCase();
    var word2 = message.content.toUpperCase();

    
 if(word1 == 'AGENDBRO' || word1 == 'AGEND')
 {
     message.channel.sendMessage( message.author.username + ", don't call him for no reaseon! smh");
 }
 else if(message.content.toUpperCase() == 'UO PING')
 {
     message.channel.sendMessage("Pong! At least I can do something!");
 }
 else if(word1 == "EUREKA")
 {
     message.channel.sendMessage("Yay!!!....?");
 }
 else if(word1 == "F")
 {
     message.channel.sendMessage("`F`");
 }
 else if(message.content.toUpperCase() == "TEST")
 {
    message.channel.send({
        files: [
            "F:/NOTGlory/connected.png"
        ]
    });     
}
});
/*bot.on('message', msg =>{
    const arg = msg.content.slice(1 + Command.length).split(' ');
});*/
bot.on('error', (err) => {
    if(err)console.log(err)
    });
bot.on('ready', () => {
    console.log(`${bot.user.username} is online`);
    });
bot.login(TOKEN);
