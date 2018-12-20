const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});

class unmuteCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'unmute', 
        group: 'voltpvp',
        memberName: 'unmute',
        description: "Unmutes a muted user"
      });
    }

    async run(message, args)
    {
        var unmuteargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var unmuteuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(unmuteargs[0]));
        var unmuterole = message.guild.roles.find(`name`, "Muted");
        var supportteamerole = message.guild.roles.find(`name`, "SUPPORT TEAM");

        if (!unmuterole) return message.channel.send("Please make a 'Muted' role to proceed")

        if (!unmuteuser) return message.channel.send({embed: new Discord.RichEmbed()
            .setDescription(":x: **Missing args**")
            .setColor("#FF4040")
            .addField("->", ">unmute [User]")});

        if(!message.member.roles.has(supportteamerole.id)) return message.channel.send("Insufficient permission. You do not have permission to unmute other users")

        if(unmuteuser.roles.has(supportteamerole.id)) return message.channel.send("Insufficient permission. You do not have permission to unmute the support team members!");

        var unmuteembed = new Discord.RichEmbed()
            .setColor("#4286f4")
            .setTitle('**VoltPvP [] Unmute**')
            .setDescription(`${unmuteuser} has been unmuted by ${message.author}`, `->`)
            

            let logschannel = message.guild.channels.find(`name`, "logs");
            if(!logschannel) return message.channel.send("Couldn't find the logs channel");

            message.channel.send(`${unmuteuser} has been sucessfully been unmuted`)
            logschannel.send(unmuteembed).then(unmuteuser.removeRole(unmuterole.id));
    }
}

module.exports = unmuteCommand;
