//PLUGINS
const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = ">";
const bot = new commando.Client({
    commandPrefix: prefix
});
//PLUGINS

//BOT TOKEN
bot.login(process.env.token);
//BOT TOKEN

//GETS THE BOT ONLINE
bot.on('ready',function(){
    console.log(`Bot is now online!, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    bot.user.setActivity(`>help | VoltPvP`, { type: 'WATCHING' });
});
//GETS THE BOT ONLINE

//REGISTRIES
bot.registry.registerGroup('voltpvp', 'voltpvp')
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();
//REGISTIES

//RANKS INFORMATION
bot.on('message', (message) => {
    if (message.content == "$Vertus")
    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Vertus | Rank**")
        .setDescription("Buying this rank will allow you to have the permissions below")
        .setColor("#FFDF00")
        .addField("**__Nick", "/nick__**")
        .addField("**__Fly", "/fly__**")
        .addField("**__Host public parties__**", "->")})
})

bot.on('message', (message) =>{
    if (message.content == "$NovA")
    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Nova | Rank**")
        .setColor("#FFDF00")
        .setDescription("Buying this rank will allow you to have the permissions below")
        .addField("**__Nick__**", "/nick")
        .addField("**__Fly__**", "/fly")
        .addField("**__Host public parties__**", "->")
        .addField("**__Host sumo events__**", "->")})
})

bot.on('message', (message) => {
    if (message.content == "$Volt")
    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Volt | Rank**")
        .setColor("#FFDF00s")
        .setDescription("Buying this rank will allow you to have the permissions below")
        .addField("**__Nick__**", "/nick")
        .addField("**__Fly__**", "/fly")
        .addField("**__Host public parties__**", "->")
        .addField("**__Host sumo events__**", "->")
        .addField("**__Host KOTH events__**", "->")})
})
//RANKS INFORMATION
