const Commando = require('discord.js-commando');
const discord = require('discord.js');


class listCreate extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'list',
            group: 'alphatests',
            memberName: 'list',
            description: 'Creates a new list of members'
        });
    }

    async run(message, args)
    {
        const arg = args.split(' ');
       listMembers.push(message.author)
       message.channel.send("New list has been created and "+ message.author.username +" have been enrolled in it" +  arg[1]); 
    }

}
module.exports = listCreate;