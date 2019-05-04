const Commando = require('discord.js-commando');
const discord = require('discord.js');


class diceRoll extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'alphatests',
            memberName: 'roll',
            description: 'Rolls a dice and gives a number between 1 to 6'
        });
    }

    async run(message, args)
    {
        var rollednumber = Math.floor( Math.random() * 6 + 1) ;
        message.channel.sendMessage("Your dice landed on " + rollednumber);
    }

}
module.exports = diceRoll;