const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});

class announceCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'announce', 
      group: 'voltpvp',
      memberName: 'announce',
      description: "Announces a message in #announcements"
    });
  }

  async run (message, args)
  {
    let announcementargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
    let announcementmessage = announcementargs.join(" ").slice(9);

    let announcementschannel = message.guild.channels.find(`name`, "announcements");
    if(!announcementschannel) return message.channel.send("Couldn't find the announcements channel");
    var supportteamrole = message.guild.roles.find(`name`, "SUPPORT TEAM");
    if (!message.member.roles.has(supportteamrole.id)) return message.channel.send("Insufficient permission. You do not have permission to announce messages")

    var announcementmessageembed = new Discord.RichEmbed()
    .setTitle("**VoltPvP | Announcement**")
    .setColor("#FFDF00")
    .addField("**__Announcement__**", `${announcementmessage}`)
    .setImage("https://cdn.discordapp.com/attachments/523073883427831809/525212118882975755/Volt_old_logo.png")
    .setTimestamp()

    if (announcementmessage.includes("@everyone"))
    {
      announcementschannel.send("@everyone @here")
    }
    if (announcementmessage.includes("@Developer"))
    {
      announcementschannel.send("@Developer")
    }
    if (announcementmessage.includes("@Discord Developer"))
    {
      announcementschannel.send("@Discord Developer")
    }
    if (announcementmessage.includes("@Manager"))
    {
      announcementschannel.send("@Manager")
    }
    if (announcementmessage.includes("@Platform Admin"))
    {
      announcementschannel.send("@Platform Admin")
    }
    if (announcementmessage.includes("@Admin"))
    {
      announcementschannel.send("@Admin")
    }
    if (announcementmessage.includes("@Partner"))
    {
      announcementschannel.send("@Partner")
    }
    if (announcementmessage.includes("@Senior Mod"))
    {
      announcementschannel.send("@Senior Mod")
    }
    if (announcementmessage.includes("@Mod"))
    {
      announcementschannel.send("@Mod")
    }
    if (announcementmessage.includes("@SUPPOR TEAM"))
    {
      announcementschannel.send("@SUPPOR TEAM")
    }
    if (announcementmessage.includes("@Chat Mod"))
    {
      announcementschannel.send("@Chat Mod")
    }
    if (announcementmessage.includes("@Trial Mod"))
    {
      announcementschannel.send("@Trial Mod")
    }
    if (announcementmessage.includes("@head Builder"))
    {
      announcementschannel.send("@Head Builder")
    }
    if (announcementmessage.includes("@Builder"))
    {
      announcementschannel.send("@Builder")
    }
    if (announcementmessage.includes("@Discord Bots"))
    {
      announcementschannel.send("@Discord Bots")
    }
    if (announcementmessage.includes("@Famous"))
    {
      announcementschannel.send("@Famous")
    }
    if (announcementmessage.includes("@youtuber"))
    {
      announcementschannel.send("@Youtuber")
    }
    if (announcementmessage.includes("@Volt"))
    {
      announcementschannel.send("@Volt")
    }
    

    announcementschannel.send(announcementmessageembed);
  }
}

module.exports = announceCommand;
