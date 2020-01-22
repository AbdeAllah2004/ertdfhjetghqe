const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("669618334127358015")
setInterval(function() {
channel.send(`Abde Abde Abde Abde Abde`);
}, 30)
})

client.login(process.env.BOT_TOKEN);