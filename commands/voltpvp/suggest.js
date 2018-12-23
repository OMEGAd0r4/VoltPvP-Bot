const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");

class suggestCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'suggest', 
      group: 'voltpvp',
      memberName: 'suggest',
      description: "Give the server some suggestions"
    });
  }

  async run(message,args)
  {
        let suggestargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        let suggestmessage = suggestargs.join(" ").slice(8);
        if (!suggestmessage) return message.channel.send({embed: new Discord.RichEmbed()
          .setDescription(":x: **Missing args**")
          .setColor("#FF4040")
          .addField("->", ">suggest [suggestion]")});

          if (!message.channel.name.startsWith(`suggestions`)) return message.channel.send(`You can't use the suggest command outside of a suggestions channel.`);

            var suggestembed = new Discord.RichEmbed()
            .setTitle('**Suggestion | Information**')
            .setColor("#4286f4")
            .addField('**Suggested By**', `${message.author} with the ID: ${message.author.id}`)
            .addField('**User suggestion**', suggestmessage)
            .setTimestamp()

            let logschannel = message.guild.channels.find(`name`, "logs");
            if(!logschannel) return message.channel.send("Couldn't find the logs channel");

            message.delete(3000);
            logschannel.send(suggestembed);

        message.reply('Thanks for your suggestion. We will contact you within 24h')
  }
}

module.exports = suggestCommand
