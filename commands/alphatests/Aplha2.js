const Commando = require('discord.js-commando');
const discord = require('discord.js');


class cardDraw extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'card',
            group: 'alphatests',
            memberName: 'card',
            description: 'Draws a card out of deck of 52'
        });
    }

    async run(message, args)
    {
        var randomnumber = Math.floor( Math.random() * 52 + 1) ;
        if(randomnumber == 1)
        {
            message.channel.send({
                files: [
                    "../images/PNG/2C.png"
                ]
            });
        }
        else if(randomnumber == 2)
        {
            message.channel.send({
                files: [
                    "../images/PNG/3C.png"
                ]
            });
        }
        else if(randomnumber == 3)
        {
            message.channel.send({
                files: [
                    "../images/PNG/4C.png"
                ]
            });
        }
        else if(randomnumber == 4)
        {
            message.channel.send({
                files: [
                    "../images/PNG/5C.png"
                ]
            });
        }
        else if(randomnumber == 5)
        {
            message.channel.send({
                files: [
                    "../images/PNG/6C.png"
                ]
            });
        }
        else if(randomnumber == 6)
        {
            message.channel.send({
                files: [
                    "../images/PNG/7C.png"
                ]
            });
        }
        else if(randomnumber == 7)
        {
            message.channel.send({
                files: [
                    "../images/PNG/8C.png"
                ]
            });
        }
        else if(randomnumber == 8)
        {
            message.channel.send({
                files: [
                    "../images/PNG/9C.png"
                ]
            });
        }
        else if(randomnumber == 9)
        {
            message.channel.send({
                files: [
                    "../images/PNG/10C.png"
                ]
            });
        }
        else if(randomnumber == 10)
        {
            message.channel.send({
                files: [
                    "../images/PNG/AC.png"
                ]
            });
        }
        else if(randomnumber == 11)
        {
            message.channel.send({
                files: [
                    "../images/PNG/JC.png"
                ]
            });
        }
        else if(randomnumber == 12)
        {
            message.channel.send({
                files: [
                    "../images/PNG/QC.png"
                ]
            });
        }
        else if(randomnumber == 13)
        {
            message.channel.send({
                files: [
                    "../images/PNG/KC.png"
                ]
            });
        }
        else if(randomnumber == 14)
        {
            message.channel.send({
                files: [
                    "../images/PNG/2D.png"
                ]
            });
        }
        else if(randomnumber == 15)
        {
            message.channel.send({
                files: [
                    "../images/PNG/3D.png"
                ]
            });
        }
        else if(randomnumber == 16)
        {
            message.channel.send({
                files: [
                    "../images/PNG/4D.png"
                ]
            });
        }
        else if(randomnumber == 17)
        {
            message.channel.send({
                files: [
                    "../images/PNG/5D.png"
                ]
            });
        }
        else if(randomnumber == 18)
        {
            message.channel.send({
                files: [
                    "../images/PNG/6D.png"
                ]
            });
        }
        else if(randomnumber == 19)
        {
            message.channel.send({
                files: [
                    "../images/PNG/7D.png"
                ]
            });
        }
        else if(randomnumber == 20)
        {
            message.channel.send({
                files: [
                    "../images/PNG/8D.png"
                ]
            });
        }
        else if(randomnumber == 21)
        {
            message.channel.send({
                files: [
                    "../images/PNG/9D.png"
                ]
            });
        }
        else if(randomnumber == 22)
        {
            message.channel.send({
                files: [
                    "../images/PNG/10D.png"
                ]
            });
        }
        else if(randomnumber == 23)
        {
            message.channel.send({
                files: [
                    "../images/PNG/AD.png"
                ]
            });
        }
        else if(randomnumber == 24)
        {
            message.channel.send({
                files: [
                    "../images/PNG/JD.png"
                ]
            });
        }
        else if(randomnumber == 25)
        {
            message.channel.send({
                files: [
                    "../images/PNG/QD.png"
                ]
            });
        }
        else if(randomnumber == 26)
        {
            message.channel.send({
                files: [
                    "../images/PNG/KD.png"
                ]
            });
        }
        else if(randomnumber == 27)
        {
            message.channel.send({
                files: [
                    "../images/PNG/2H.png"
                ]
            });
        }
        else if(randomnumber == 28)
        {
            message.channel.send({
                files: [
                    "../images/PNG/3H.png"
                ]
            });
        }
        else if(randomnumber == 29)
        {
            message.channel.send({
                files: [
                    "../images/PNG/4H.png"
                ]
            });
        }
        else if(randomnumber == 30)
        {
            message.channel.send({
                files: [
                    "../images/PNG/5H.png"
                ]
            });
        }
        else if(randomnumber == 31)
        {
            message.channel.send({
                files: [
                    "../images/PNG/6H.png"
                ]
            });
        }
        else if(randomnumber == 32)
        {
            message.channel.send({
                files: [
                    "../images/PNG/7H.png"
                ]
            });
        }
        else if(randomnumber == 33)
        {
            message.channel.send({
                files: [
                    "../images/PNG/8H.png"
                ]
            });
        }
        else if(randomnumber == 34)
        {
            message.channel.send({
                files: [
                    "../images/PNG/9H.png"
                ]
            });
        }
        else if(randomnumber == 35)
        {
            message.channel.send({
                files: [
                    "../images/PNG/10H.png"
                ]
            });
        }
        else if(randomnumber == 36)
        {
            message.channel.send({
                files: [
                    "../images/PNG/AH.png"
                ]
            });
        }
        else if(randomnumber == 37)
        {
            message.channel.send({
                files: [
                    "../images/PNG/KH.png"
                ]
            });
        }
        else if(randomnumber == 38)
        {
            message.channel.send({
                files: [
                    "../images/PNG/JH.png"
                ]
            });
        }
        else if(randomnumber == 39)
        {
            message.channel.send({
                files: [
                    "../images/PNG/QH.png"
                ]
            });
        }
        else if(randomnumber == 40)
        {
            message.channel.send({
                files: [
                    "../images/PNG/2S.png"
                ]
            });
        }
        else if(randomnumber == 41)
        {
            message.channel.send({
                files: [
                    "../images/PNG/3S.png"
                ]
            });
        }
        else if(randomnumber == 42)
        {
            message.channel.send({
                files: [
                    "../images/PNG/4S.png"
                ]
            });
        }
        else if(randomnumber == 43)
        {
            message.channel.send({
                files: [
                    "../images/PNG/5S.png"
                ]
            });
        }
        else if(randomnumber == 44)
        {
            message.channel.send({
                files: [
                    "../images/PNG/6S.png"
                ]
            });
        }
        else if(randomnumber == 45)
        {
            message.channel.send({
                files: [
                    "../images/PNG/7S.png"
                ]
            });
        }
        else if(randomnumber == 46)
        {
            message.channel.send({
                files: [
                    "../images/PNG/8S.png"
                ]
            });
        }
        else if(randomnumber == 47)
        {
            message.channel.send({
                files: [
                    "../images/PNG/9S.png"
                ]
            });
        }
        else if(randomnumber == 48)
        {
            message.channel.send({
                files: [
                    "../images/PNG/10S.png"
                ]
            });
        }
        else if(randomnumber == 49)
        {
            message.channel.send({
                files: [
                    "../images/PNG/AS.png"
                ]
            });
        }
        else if(randomnumber == 50)
        {
            message.channel.send({
                files: [
                    "../images/PNG/JS.png"
                ]
            });
        }
        else if(randomnumber == 51)
        {
            message.channel.send({
                files: [
                    "../images/PNG/QS.png"
                ]
            });
        }
        else if(randomnumber == 52)
        {
            message.channel.send({
                files: [
                    "../images/PNG/KS.png"
                ]
            });
        }
        
    }

}
module.exports = cardDraw;