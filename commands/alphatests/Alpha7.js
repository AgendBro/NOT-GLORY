const Commando = require('discord.js-commando');
const discord = require('discord.js');


class pMessage extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'message',
            group: 'alphatests',
            memberName: 'message',
            description: 'Messages the person some random thing'
        });
    }

    async run(message, args)
    {
        let memberRole = message.member.guild.roles.find("name","Player");
       message.member.send("Hi " + message.author.username);
       message.member.addRole(memberRole, "Tried to play with me (easteregg?)");
    }

}
module.exports = pMessage;