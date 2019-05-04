const Commando = require('discord.js-commando');
const discord = require('discord.js');


class embed extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'embed',
            group: 'alphatests',
            memberName: 'embed',
            description: 'Displays an embed'
        });
    }

    async run(message, args)
    {
        var page1 = new discord.RichEmbed()
        .setDescription("A small test text")
        .setTitle("TESTING")
        .addField("YO BUD!","Yo Buddy! Why you summon me?",true)
        .setURL("https://discordapp.com/oauth2/authorize?&client_id=542663843143221259&scope=bot&permissions=0")
        .setColor(16312092)
        .setThumbnail(message.author.avatarURL)
        .setFooter("-A bot created by an awesome person")
         

        message.channel.sendEmbed(page1);
    }

}
module.exports = embed;