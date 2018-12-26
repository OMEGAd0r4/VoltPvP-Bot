const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");

class msgCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'msg', 
      group: 'voltpvp',
      memberName: 'msg',
      description: "Msges a person"
    });
  }

  async run(message,args)
  {
        if (!message.channel.name.startsWith(`commands`))
      {
        message.channel.send(`You can't use this command outside of the commands channel.`);
      }
        var msguser = message.guild.member(message.mentions.users.first()) 
        var msgargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var msgmessage = msgargs.join(" ").slice(4);

        var supportteamrole = message.guild.roles.find(`name`, "SUPPORT TEAM");
        if (!message.member.roles.has(supportteamrole.id)) return message.channel.send("Insufficient permission. You do not have permission to privately msg to members");

        if (!msguser) return message.channel.send({embed: new Discord.RichEmbed()
          .setDescription(":x: **Missing args**")
          .setColor("#FF4040")
          .addField("->", ">msg [User] [message]")});

        if (!msgmessage) return message.channel.send({embed: new Discord.RichEmbed()
            .setDescription(":x: **Missing args**")
            .setColor("#FF4040")
            .addField("->", ">msg [User] [message]")});

        msguser.sendMessage({embed: new Discord.RichEmbed()
          .setTitle("**VoltPvP [] Private Message**")
          .setColor("#FFDF00")
          .addField("**Message**", msgmessage)})
    
       message.delete(3000);

  }
}

module.exports = msgCommand;
