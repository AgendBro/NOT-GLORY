const Commando = require('discord.js-commando');
const discord = require('discord.js');


class listJoin extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'alphatests',
            memberName: 'join',
            description: 'Joins an existing list of members'
        });
    }

    async run(message, args)
    {
       listMembers.push(message.author)
       message.channel.send("Current list members after recent entry: " + listMembers); 
    }

}
module.exports = listJoin;