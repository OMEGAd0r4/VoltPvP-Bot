const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});

class infoCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'info', 
        group: 'voltpvp',
        memberName: 'info',
        description: "Shows voltpvp's server information"
      });
    }

    async run(message)
    {
      if (!message.channel.name.startsWith(`commands`)) return message.channel.send(`You can't use the suggest command outside of the commands channel.`);
        message.channel.send({embed: new Discord.RichEmbed()
            .setTitle("**VoltPvP [] Information**")
            .setColor("#FFDF00")
            .addField("**__Twitter__**", "-> soon")
            .addField("**__Discord__**", " -> https://discord.gg/rzKJNyg")
            .addField("**__Store__**", "-> https://voltpvpasia.buycraft.net")
            .setImage("https://cdn.discordapp.com/attachments/523073883427831809/525212118882975755/Volt_old_logo.png")
            .setTimestamp()})
    }
}

module.exports = infoCommand
