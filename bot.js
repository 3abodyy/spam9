const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("546431422441979917")
setInterval(function() {
channel.send(`MR.3aBooDy 95 ~ Welcome To The Hell`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
