const Commando = require('discord.js-commando');
const discord = require('discord.js');


class morpheusImage extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'r',
            group: 'torn',
            memberName: 'receipt',
            description: 'Generates a receipt'
        });
    }

    async run(message, args)
    {
        var total = 0;
        var arg = args.split(', ');
        var i;
        var text = "Your Receipt Has Been Generated<br>Pleased To Do Business With You!<br><table><tr><td><b>ITEM NAME</b></td><td><b>NUMBER</b></td><td><b>PRICE</b></td><td><b>TOTAL PRICE</b></td>";
        for(i = 0; i < arg.length; i++){
            text = text + "<tr>"
            var val = arg[i].split(' x');
            function value( Item, Price ){
                total = total + ( parseInt(val[1]) * Price );
                text = text + "<td> " + Item + " </td> <td> " + val[1] + " </td> <td> " + Price + " </td> <td>" + parseInt(val[1]) * Price + "</td> </tr>";
            }
            if(val[0].toUpperCase()=="TEDDY BEAR PLUSHIE")
            value( "Teddy Bear Plushie", 580 ); 
            else if(val[0].toUpperCase()=="VICODIN") //DRUGS!!
            value( "Vicodin", 7500 ); 
            else if(val[0].toUpperCase()=="CANNABIS")
            value( "Cannabis", 7500 ); 
            else if(val[0].toUpperCase()=="SHROOMS")
            value( "Shrooms", 10000 ); 
            else if(val[0].toUpperCase()=="KETAMINE")
            value( "Ketamine", 16000 ); 
            else if(val[0].toUpperCase()=="LSD")
            value( "LSD", 50000 ); 
            else if(val[0].toUpperCase()=="ECSTASY")
            value( "Ecstasy", 63000 ); 
            else if(val[0].toUpperCase()=="OPIUM")
            value( "Opium", 72000 ); 
            else if(val[0].toUpperCase()=="PCP")
            value( "PCP", 73000 ); 
            else if(val[0].toUpperCase()=="SPEED")
            value( "Speed", 140000 ); 
            else if(val[0].toUpperCase()=="XANAX")
            value( "Xanax", 835000 ); 
            else if(val[0].toUpperCase()=="LOVE JUICE") //NO DRUGS
            value( "Love Juice", 5000000 ); 
            else if(val[0].toUpperCase()==("Empty Blood Bag").toUpperCase()) // MEDS
            value( "Empty Blood Bag", 16000 ); 
            else if(val[0].toUpperCase()==("Small First Aid Kit").toUpperCase())
            value( "Small First Aid Kit", 21000 ); 
            else if(val[0].toUpperCase()==("Blood Bag : A+").toUpperCase())
            value( "Blood Bag : A+", 26000 ); 
            else if(val[0].toUpperCase()==("Blood Bag : B+").toUpperCase())
            value( "Blood Bag : B+", 28000 ); 
            else if(val[0].toUpperCase()==("Blood Bag : O+").toUpperCase())
            value( "Blood Bag : O+", 29000 ); 
            else if(val[0].toUpperCase()==("Blood Bag : AB+").toUpperCase())
            value( "Blood Bag : AB+", 35000 ); 
            else if(val[0].toUpperCase()==("First Aid Kit").toUpperCase())
            value( "First Aid Kit", 35000 ); 
            else if(val[0].toUpperCase()==("Blood Bag : O-").toUpperCase())
            value( "Blood Bag : O-", 40000 ); 
            else if(val[0].toUpperCase()==("Blood Bag : A-").toUpperCase())
            value( "Blood bag : A-", 40000 ); 
            else if(val[0].toUpperCase()==("Morphine").toUpperCase())
            value( "Morphine", 49000 ); 
            else if(val[0].toUpperCase()==("Blood Bag : B-").toUpperCase())
            value( "Blood Bag : B-", 55000 ); 
            else if(val[0].toUpperCase()==("Blood Bag : AB-").toUpperCase())
            value( "Blood Bag : AB-", 80000 ); 
            else if(val[0].toUpperCase()==("Neumune Tablet").toUpperCase())
            value( "Neumune Tablet", 2500000 ); 
            else if(val[0].toUpperCase()==("Antidote").toUpperCase())// MEDS END
            value( "Antidote", 52000000 ); 
            else if(val[0].toUpperCase()==("Lottery Voucher").toUpperCase())// SUPPLY PACK
            value( "Lottery Voucher", 830000 ); 
            else if(val[0].toUpperCase()==("Box of Medical Supplies").toUpperCase())
            value( "Box of Medical Supplies", 960000 ); 
            else if(val[0].toUpperCase()==("Box of Grenades").toUpperCase())
            value( "Box of Grenades", 1000000 ); 
            else if(val[0].toUpperCase()==("Six Pack of Alcohol").toUpperCase())
            value( "Six Pack of Alcohol", 1100000 ); 
            else if(val[0].toUpperCase()==("Drug Pack").toUpperCase())
            value( "Drug Pack", 4300000 ); 
            else if(val[0].toUpperCase()==("Keg of Beer").toUpperCase())
            value( "Keg of Beer", 5200000 ); 
            else if(val[0].toUpperCase()==("Six Pack of Energy Drink").toUpperCase())
            value( "Six Pack of Energy Drink", 14000000 ); 
            else if(val[0].toUpperCase()==("Donator Pack").toUpperCase())
            value( "Donator Pack", 25250000 ); 
            else if(val[0].toUpperCase()==("Goodie Bag").toUpperCase()) // NO SUPPLY
            value( "Goodie Bag", 28000000 ); 
            else if(val[0].toUpperCase()==("Stink Bombs").toUpperCase()) // SPECIAL 
            value( "Stink Bombs", 1500000 ); 
            else if(val[0].toUpperCase()==("Dog Poop").toUpperCase())
            value( "Dog Poop", 1500000 ); 
            else if(val[0].toUpperCase()==("Toilet Paper").toUpperCase())
            value( "Toilet Paper", 1600000 ); 
            else if(val[0].toUpperCase()==("Horse's Head").toUpperCase())
            value( "Horse's Head", 1650000 ); 
            else if(val[0].toUpperCase()==("Small Explosive Device").toUpperCase())
            value( "Small Explosive Device", 2600000 ); 
            else if(val[0].toUpperCase()==("Business Class Ticket").toUpperCase())
            value( "Business Class Ticket", 4800000 ); 
            else if(val[0].toUpperCase()==("Poison Mistletoe").toUpperCase())
            value( "Poison Mistletoe", 18000000 ); 
            else if(val[0].toUpperCase()==("Donator Pack").toUpperCase())
            value( "Donator Pack", 25250000 ); 
            else if(val[0].toUpperCase()==("Casino Pass").toUpperCase())
            value( "Casino Pass", 180000000 ); 
            else if(val[0].toUpperCase()==("Cesium-137").toUpperCase()) // NOT SPECIAL
            value( "Cesium-137", 182000000 );
            else if(val[0].toUpperCase()==("Bunch of Flowers").toUpperCase()) // FLOWERS
            value( "Bunch of Flowers", 500 ); 
            else if(val[0].toUpperCase()==("Dozen Roses").toUpperCase())
            value( "Dozen Roses", 550 ); 
            else if(val[0].toUpperCase()==("Bunch of Black Roses").toUpperCase())
            value( "Bunch of Black Roses", 550 ); 
            else if(val[0].toUpperCase()==("Single Red Rose").toUpperCase())
            value( "Single Red Rose", 600 ); 
            else if(val[0].toUpperCase()==("Dahlia").toUpperCase())
            value( "Dahlia", 2300 ); 
            else if(val[0].toUpperCase()==("Crocus").toUpperCase())
            value( "Crocus", 8800 ); 
            else if(val[0].toUpperCase()==("Banana Orchid").toUpperCase())
            value( "Banana Orchid", 9500 ); 
            else if(val[0].toUpperCase()==("Orchid").toUpperCase())
            value( "Orchid", 23000 ); 
            else if(val[0].toUpperCase()==("Ceibo Flower").toUpperCase())
            value( "Ceibo Flower", 40000 ); 
            else if(val[0].toUpperCase()==("Edelweiss").toUpperCase())
            value( "Edelweiss", 41000 ); 
            else if(val[0].toUpperCase()==("Heather").toUpperCase())
            value( "Heather", 47000 ); 
            else if(val[0].toUpperCase()==("African Violet").toUpperCase())
            value( "African Violet", 67000 ); 
            else if(val[0].toUpperCase()==("Cherry Blossom").toUpperCase())
            value( "Cherry Blossom", 66000 ); 
            else if(val[0].toUpperCase()==("Peony").toUpperCase())
            value( "Peony", 77000 ); 
            else if(val[0].toUpperCase()==("Tribulus Omanense").toUpperCase()) // NO FLOWERS
            value( "Tribulus Omanense", 80000 ); 
            else if(val[0].toUpperCase()==("Can of Munster").toUpperCase()) // ENERGY 
            value( "Can of Munster", 1950000 ); 
            else if(val[0].toUpperCase()==("Can of Santa Shooters").toUpperCase())
            value( "Can of Santa Shooters", 1950000 ); 
            else if(val[0].toUpperCase()==("Can of Rockstar Rudolph").toUpperCase())
            value( "Can of Rockstar Rudolph", 2300000 ); 
            else if(val[0].toUpperCase()==("Can of Red Cow").toUpperCase())
            value( "Can of Red Cow", 2300000 ); 
            else if(val[0].toUpperCase()==("Can of Tourine Elite").toUpperCase())
            value( "Can of Tourine Elite", 3350000 ); 
            else if(val[0].toUpperCase()==("Can of X-MASS").toUpperCase()) // NO E
            value( "Can of X-MASS", 3350000 ); 
            else if(val[0].toUpperCase()==("Bottle of Beer").toUpperCase()) // ALCOHOL
            value( "Bottle of Beer", 700 ); 
            else if(val[0].toUpperCase()==("Bottle of Tequila").toUpperCase())
            value( "Bottle of Tequila", 1200 ); 
            else if(val[0].toUpperCase()==("Bottle of Champagne").toUpperCase())
            value( "Bottle of Champagne", 3100 ); 
            else if(val[0].toUpperCase()==("Bottle of Sake").toUpperCase())
            value( "Bottle of Sake", 6600 ); 
            else if(val[0].toUpperCase()==("Bottle of Kandy Kane").toUpperCase())
            value( "Bottle of Kandy Kane", 82000 ); 
            else if(val[0].toUpperCase()==("Bottle of Pumpkin Brew").toUpperCase())
            value( "Bottle of Pumpkin Brew", 82000 ); 
            else if(val[0].toUpperCase()==("Bottle of Wicked Witch").toUpperCase())
            value( "Bottle of Wicked Witch", 140000 ); 
            else if(val[0].toUpperCase()==("Bottle of Christmas Cocktail").toUpperCase())
            value( "Bottle of Christmas Cocktail", 140000 ); 
            else if(val[0].toUpperCase()==("Bottle of Minty Mayhem").toUpperCase())
            value( "Bottle of Minty Mayhem", 150000 ); 
            else if(val[0].toUpperCase()==("Bottle of Mistletoe Madness").toUpperCase())
            value( "Bottle of Mistletoe Madness", 390000 ); 
            else if(val[0].toUpperCase()==("Bottle of Stinky Swamp Punch").toUpperCase())
            value( "Bottle of Stinky Swamp Punch", 370000 ); 
            else if(val[0].toUpperCase()==("Bottle of Green Stout").toUpperCase())
            value( "Bottle of Green Stout", 1100000 ); 
            else if(val[0].toUpperCase()==("Bottle of Christmas Spirit").toUpperCase()) // SOBER
            value( "Bottle of Christmas Spirit", 15000000 ); 
            else if(val[0].toUpperCase()==("Sheep Plushie").toUpperCase()) // PLUSHIES
            value( "Sheep Plushie", 600 ); 
            else if(val[0].toUpperCase()==("Kitten Plushie").toUpperCase())
            value( "Kitten Plushie", 650 ); 
            else if(val[0].toUpperCase()==("Wolverine Plushie").toUpperCase())
            value( "Wolverine Plushie", 8800 ); 
            else if(val[0].toUpperCase()==("Stingray Plushie").toUpperCase())
            value( "Stingray Plushie", 9200 ); 
            else if(val[0].toUpperCase()==("Jaguar Plushie").toUpperCase())
            value( "Jaguar Plushie", 17000 ); 
            else if(val[0].toUpperCase()==("Nessie Plushie").toUpperCase())
            value( "Nessie Plushie", 43500 ); 
            else if(val[0].toUpperCase()==("Red Fox Plushie").toUpperCase())
            value( "Red Fox Plushie", 45000 ); 
            else if(val[0].toUpperCase()==("Monkey Plushie").toUpperCase())
            value( "Monkey Plushie", 50000 ); 
            else if(val[0].toUpperCase()==("Chamios Plushie").toUpperCase())
            value( "Chamios Plushie", 50000 ); 
            else if(val[0].toUpperCase()==("Lion Plushie").toUpperCase())
            value( "Lion Plushie", 69000 ); 
            else if(val[0].toUpperCase()==("Panda Plushie").toUpperCase())
            value( "Panda Plushie", 70000 ); 
            else if(val[0].toUpperCase()==("Camel Plushie").toUpperCase()) // NO PLUSHIES
            value( "Camel Plushie", 97000 ); 
            else if(val[0].toUpperCase()==("Box of Chocolate Bars").toUpperCase()) // CANDY
            value( "Box of Chocolate Bars", 600 ); 
            else if(val[0].toUpperCase()==("Box of Extra Strong Mints").toUpperCase())
            value( "Box of Extra Strong Mints", 610 ); 
            else if(val[0].toUpperCase()==("Bag of Bon Bons").toUpperCase())
            value( "Bag of Bon Bons", 620 ); 
            else if(val[0].toUpperCase()==("Lollipop").toUpperCase())
            value( "Lollipop", 700 ); 
            else if(val[0].toUpperCase()==("Bag of Chocolate Kisses").toUpperCase())
            value( "Bag of Chocolate Kisses", 700 ); 
            else if(val[0].toUpperCase()==("Box of Sweet Hearts").toUpperCase())
            value( "Box of Sweet Hearts", 720 ); 
            else if(val[0].toUpperCase()==("Big Box of Chocolate Bars").toUpperCase())
            value( "Big Box of Chocolate Bars", 2900 ); 
            else if(val[0].toUpperCase()==("Box of Bon Bons").toUpperCase())
            value( "Box of Bon Bons", 5100 ); 
            else if(val[0].toUpperCase()==("Bag of Candy Kisses").toUpperCase())
            value( "Bag of Candy Kisses", 30000 ); 
            else if(val[0].toUpperCase()==("Bag of Tootsie Rolls").toUpperCase())
            value( "Bag of Tootsie Rolls", 51000 ); 
            else if(val[0].toUpperCase()==("Red Easter Egg").toUpperCase())
            value( "Red Easter Egg", 80000 ); 
            else if(val[0].toUpperCase()==("Orange Easter Egg").toUpperCase())
            value( "Orange Easter Egg", 80000 ); 
            else if(val[0].toUpperCase()==("Pink Easter Egg").toUpperCase())
            value( "Pink Easter Egg", 80000 ); 
            else if(val[0].toUpperCase()==("Yellow Easter Egg").toUpperCase())
            value( "Yellow Easter Egg", 80000 ); 
            else if(val[0].toUpperCase()==("Green Easter Egg").toUpperCase())
            value( "Green Easter Egg", 80000 ); 
            else if(val[0].toUpperCase()==("Blue Easter Egg").toUpperCase())
            value( "Blue Easter Egg", 90000 ); 
            else if(val[0].toUpperCase()==("Bag of Bloody Eyeballs").toUpperCase())
            value( "Bag of Bloody Eyeballs", 105000 ); 
            else if(val[0].toUpperCase()==("Bag of Reindeer Droppings").toUpperCase())
            value( "Bag of Reindeer Droppings", 140000 ); 
            else if(val[0].toUpperCase()==("Bag of Chocolate Truffles").toUpperCase())
            value( "Bag of Chocolate Truffles", 140000 ); 
            else if(val[0].toUpperCase()==("Black Easter Egg").toUpperCase())
            value( "Black Easter Egg", 150000 ); 
            else if(val[0].toUpperCase()==("Brown Easter Egg").toUpperCase())
            value( "Brown Easter Egg", 230000 ); 
            else if(val[0].toUpperCase()==("Jawbreaker").toUpperCase())
            value( "Jawbreaker", 280000 ); 
            else if(val[0].toUpperCase()==("Bag of Sherbet").toUpperCase())
            value( "Bag of Sherbet", 280000 ); 
            else if(val[0].toUpperCase()==("Pixie Sticks").toUpperCase())
            value( "Pixie Sticks", 290000 ); 
            else if(val[0].toUpperCase()==("Gold Easter Egg").toUpperCase())
            value( "Gold Easter Egg", 900000 ); 
            else if(val[0].toUpperCase()==("White Easter Egg").toUpperCase()) // DIABETES
            value( "White Easter Egg", 2100000 ); 
            else if(val[0].toUpperCase()==("Lawyer Business Card").toUpperCase()) // BOOSTERS
            value( "Lawyer Business Card", 480000 ); 
            else if(val[0].toUpperCase()==("Gift Card").toUpperCase())
            value( "Gift Card", 3700000 ); 
            else if(val[0].toUpperCase()==("Erotic DVD").toUpperCase())
            value( "Erotic DVD", 4400000 ); 
            else if(val[0].toUpperCase()==("Feathery Hotel Coupon").toUpperCase())
            value( "Feathery Hotel Coupon", 14300000 ); 
            else if(val[0].toUpperCase()==("Book of Carols").toUpperCase())
            value( "Book of Carols", 14000000 ); 
            else if(val[0].toUpperCase()==("Dumbbells").toUpperCase())
            value( "Dumbbells", 438000000 ); 
            else if(val[0].toUpperCase()==("Skateboard").toUpperCase())
            value( "Skateboard", 438000000 ); 
            else if(val[0].toUpperCase()==("Boxing Gloves").toUpperCase())
            value( "Boxing Gloves", 438000000 ); 
            else if(val[0].toUpperCase()==("Parachute").toUpperCase()) // NO BOOST
            value( "Parachute", 438000000 ); 
            else if(val[0].toUpperCase()==("Brick").toUpperCase()) // TEMORARY
            value( "Brick", 500 ); 
            else if(val[0].toUpperCase()==("Pepper Spray").toUpperCase())
            value( "Pepper Spray", 1300 ); 
            else if(val[0].toUpperCase()==("Ninja Stars").toUpperCase())
            value( "Ninja Stars", 2400 ); 
            else if(val[0].toUpperCase()==("Fireworks").toUpperCase())
            value( "Fireworks", 6000 ); 
            else if(val[0].toUpperCase()==("Grenade").toUpperCase())
            value( "Grenade", 6700 ); 
            else if(val[0].toUpperCase()==("Stick Grenade").toUpperCase())
            value( "Stick Grenade", 7000 ); 
            else if(val[0].toUpperCase()==("Claymore Mine").toUpperCase())
            value( "Claymore Mine", 11500 ); 
            else if(val[0].toUpperCase()==("HEG").toUpperCase())
            value( "HEG", 15100 ); 
            else if(val[0].toUpperCase()==("Trout").toUpperCase())
            value( "Trout", 15000 ); 
            else if(val[0].toUpperCase()==("Throwing Knife").toUpperCase())
            value( "Throwing Knife", 28000 ); 
            else if(val[0].toUpperCase()==("Tear Gas").toUpperCase())
            value( "Tear Gas", 40000 ); 
            else if(val[0].toUpperCase()==("Snowball").toUpperCase())
            value( "Snowball", 36000 ); 
            else if(val[0].toUpperCase()==("Flash Grenade").toUpperCase())
            value( "Flash Grenade", 61000 ); 
            else if(val[0].toUpperCase()==("Smoke Grenade").toUpperCase())
            value( "Smoke Grenade", 90000 ); 
            else if(val[0].toUpperCase()==("Molotov Cocktail").toUpperCase())
            value( "Molotov Cocktail", 120000 ); 
            else if(val[0].toUpperCase()==("Melatonin").toUpperCase())
            value( "Melatonin", 290000 ); 
            else if(val[0].toUpperCase()==("Tyrosine").toUpperCase())
            value( "Tyrosine", 500000 ); 
            else if(val[0].toUpperCase()==("Epinephrine").toUpperCase())
            value( "Epinephrine", 850000 ); 
            else if(val[0].toUpperCase()==("Serotonin").toUpperCase())
            value( "Serotonin", 1200000 ); 
            else if(val[0].toUpperCase()==("Book").toUpperCase()) // NO TEMP
            value( "Book", 1300000 ); 
            else if(val[0].toUpperCase()==("Florin Coin").toUpperCase()) // ARTIFACTS
            value( "Florin Coin", 1400000 ); 
            else if(val[0].toUpperCase()==("Leopard Coin").toUpperCase())
            value( "Leopard Coin", 1500000 ); 
            else if(val[0].toUpperCase()==("Gold Noble Coin").toUpperCase())
            value( "Gold Noble Coin", 1500000 ); 
            else if(val[0].toUpperCase()==("Senet Board").toUpperCase())
            value( "Senet Board", 3500000 ); 
            else if(val[0].toUpperCase()==("Vairocana Buddha Sculpture").toUpperCase())
            value( "Vairocana Buddha Sculpture", 5300000 ); 
            else if(val[0].toUpperCase()==("Black Senet Pawn").toUpperCase())
            value( "Black Senet Pawn", 6500000 ); 
            else if(val[0].toUpperCase()==("White Senet Pawn").toUpperCase())
            value( "White Senet Pawn", 7000000 ); 
            else if(val[0].toUpperCase()==("Ganesha Sculpture").toUpperCase())
            value( "Ganesha Sculpture", 9000000 ); 
            else if(val[0].toUpperCase()==("Script from the Quran: Ibn Masud").toUpperCase())
            value( "Script from the Quran: Ibn Masud", 11000000 ); 
            else if(val[0].toUpperCase()==("Script from the Quran: Ubay Ibn Kab").toUpperCase())
            value( "Script from the Quran: Ubay Ibn Kab", 15000000 ); 
            else if(val[0].toUpperCase()==("Script from the Quran: Ali").toUpperCase())
            value( "Script from the Quran: Ali", 15500000 ); 
            else if(val[0].toUpperCase()==("Shabti Sculpture").toUpperCase())
            value( "Shabti Sculpture", 19000000 ); 
            else if(val[0].toUpperCase()==("Egyptian Amulet").toUpperCase())
            value( "Egyptian Amulet", 480000000 ); 
            else 
            text = "Error: Unexpected Name: " + val[0];
        }
        text = text + "<tr> <td></td> <td></td> <td></td> <td>" + total + " </td></tr>";
        message.channel.send(text + "</table>");
    }

}
module.exports = morpheusImage;