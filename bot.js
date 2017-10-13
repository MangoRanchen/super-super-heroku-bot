const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'Toxapex') {
    	message.reply('who is this guy anyway lol');
  	}
});

client.on('message', message => {
    if (message.content === 'gay') {
    	message.reply('dont call me gay get some respect');
  	}
});

client.on('message', message => {
    if (message.content === 'hentai') {
    	message.reply('well no sorry');
  	}
});

client.on('message', message => {
    if (message.content === 'NSFW') {
    	message.reply('i said no');
  	}
});

client.on('message', message => {
    if (message.content === 'Piss') {
    	message.reply('then fuck off');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
