const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});

class ticketCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'new', 
        group: 'voltpvp',
        memberName: 'new',
        description: "Creates a support ticket"
      });
    }
    async run(message, args)
    {
        const reason = message.content.split(" ").slice(1).join(" ");
        if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send("You already have a ticket open.");
        message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
            let role = message.guild.roles.find("name", "SUPPORT TEAM");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                 SEND_MESSAGES: true,
                 READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, ${c.name}.`);
            const embed = new Discord.RichEmbed()
            .setColor("#4286f4")
            .addField(`Hey ${message.author.username}!, Your support ticket has been created, please explain th reason for this ticket and we will respond within 24h.`, `Thanks for your patience.`)
            .setTimestamp();
            c.send({ embed: embed });
        }).catch(console.error);
        }
}

module.exports = ticketCommand;

