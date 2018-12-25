const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = ">";
const bot = new commando.Client({
    commandPrefix: prefix
});

class statusCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'status',
        group: 'voltpvp',
        memberName: 'status',
        description: 'Shows the status of the VoltPvP Network'
      });
    }

    async run(message)
    {
        //npm install request --save
        var request = require("request");
        var mcIP = "voltpvp.mymc.io";
        var mcPort = "";

        var url = "http://mcapi.us/server/status?ip=" + mcIP + "&port" + mcPort;
        request(url, function(err, response, body) {
            if (err) message.channel.send(err);

            body = JSON.parse(body);


             if (!message.channel.name.startsWith(`commands`)) return message.channel.send(`You can't use the status command outside of the commands channel.`);
            var status = `The VoltPvP Network is currently offline`;
            if(body.players.now){
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**VoltPvP | Status**")
                    .setColor("#FFDF00")
                    .addField("The VoltPvP network is currently online with,", `${body.players.now} people playing`)
                    .setThumbnail("https://cdn.discordapp.com/attachments/523073883427831809/525212118882975755/Volt_old_logo.png")})
            }
            if(!body.players.now){
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**VoltPvP | Status**")
                    .setColor("#4286f4")
                    .addField("The VoltPvP network is currently online with,", "-> 0 players")
                    .setThumbnail("https://cdn.discordapp.com/attachments/523073883427831809/525212118882975755/Volt_old_logo.png")})
            }
        })
    }
}

module.exports = statusCommand;
