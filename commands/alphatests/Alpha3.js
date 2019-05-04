const Commando = require('discord.js-commando');
const discord = require('discord.js');


class authorImage extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'image',
            group: 'alphatests',
            memberName: 'image',
            description: 'Displays image of the sender'
        });
    }

    async run(message, args)
    {
        {
            message.channel.send(message.author.avatarURL);     
        }
    }

}
module.exports = authorImage;