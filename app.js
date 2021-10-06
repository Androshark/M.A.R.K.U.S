const { Client, Intents, DiscordAPIError, User } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    console.log('Hello');
});

client.on('messageCreate', function (message) {
    var patt = new RegExp("[0-9]", "g");
    if(patt.test(message.content) && !message.author.bot) {
        var result = parseInt(message.content, 10) + 1
        message.channel.send(result.toString(10));
    }
});

client.login('Token');