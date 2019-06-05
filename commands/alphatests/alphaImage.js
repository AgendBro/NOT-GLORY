const Commando = require('discord.js-commando');
const discord = require('discord.js');
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */

class imageGet extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'search',
            group: 'alphatests',
            memberName: 'search',
            description: 'Gets an image from search engine'
        });
    }

    async run(message, args)
    {
        image(message, args); 
    }

}

module.exports = imageGet;
function image(message, args) {

    /* extract search query from message */
 
    var search = args;
   /* JSON("https://www.googleapis.com/customsearch/v1?key=AIzaSyDOWrxrFWxbAE2sZyaYwWm-6ZW8LSKNhls&cx=011705006312517852445:5w6lxhbrcq4&q=" + search, gotData); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
 
    function gotData(data){
        var url = data.items[0].pagemap.cse_image[0].src;
        message.channel.send(url);
    }*/
    var options = {
        url: "https://www.googleapis.com/customsearch/v1?searchType=image&key=AIzaSyDOWrxrFWxbAE2sZyaYwWm-6ZW8LSKNhls&cx=011705006312517852445:5w6lxhbrcq4&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }
        data = JSON.parse(responseBody);
 
        /* Extract image URLs from responseBody using cheerio*/
 
        /*$ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");*/
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        //var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        //console.log(responseBody);
        var urls;
        for(var i=0;!urls;i++){
            if(!data.items[i].link)
            i=i;
            else
            urls = data.items[i].link;
        }
       if (!urls.length) {
           //Handle no results
          return;
      }
     /*for(let g=0; g < 10; g++){
          if(urls == "&.png" || urls == "&.jpg" || urls == "&.jpeg" || urls == "&.gif")
          break;
          else{
          temp = urls.substring(0, urls.length-1);
          urls = temp;
          }
      }*/
    if(urls.includes("png")){
          let reqindex = urls.indexOf("png");
          urls = urls.substring(0, reqindex+3);
      }

    else if(urls.includes("jpg")){
        let reqindex = urls.indexOf("jpg");
        urls = urls.substring(0, reqindex+3);
    }

    else if(urls.includes("gif")){
        let reqindex = urls.indexOf("gif");
        urls = urls.substring(0, reqindex+3);
    }

    else if(urls.includes("jpeg")){
        let reqindex = urls.indexOf("jpeg");
        urls = urls.substring(0, reqindex+4);
    }
      console.log(urls);
        // Send result
        message.channel.send({
                files: [
                    urls
                ]
            });
        });
    }
