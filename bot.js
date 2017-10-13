const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '!Toxapex') {
    	message.reply('who is this guy anyway lol');
  	}
});

client.on('message', message => {
    if (message.content === '!gay') {
    	message.reply('dont call me gay get some respect');
  	}
});

client.on('message', message => {
    if (message.content === '!hentai') {
    	message.reply('well no sorry');
  	}
});

client.on('message', message => {
    if (message.content === '!NSFW') {
    	message.reply('i said no');
  	}
});

client.on('message', message => {
    if (message.content === '!Piss') {
    	message.reply('then fuck off');
  	}
});

client.on('message', message => {
    if (message.content === '!onejob') {
    	message.reply('you had one job if you didnt know xDDDD');
  	}
});

client.on('message', message => {
    if (message.content === '!nevyseal') {
    	message.reply('What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.');
  	}
});

client.on('message', message => {
    if (message.content === '!good') {
    	message.reply('good thing that my ass hurt');
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('here the commands : !good !nevyseal !onejob !Piss !NSFW !hentai !gay, have fun
                      here a server for ya https://discord.gg/A7eVMDV have a nice pool');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
