import Client from "./structures/Client.js";
import config from "./config.js"
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from 'fs'
const __dirname = dirname(fileURLToPath(import.meta.url));


const client = new Client(config.Discord, {
    commandPrefix: "lala",
    master: "254950404050255872",
    unknownCommandResponse: false,
    intents: [
        'guilds',
    ],
    allowedMentions: {
        everyone: false,
        roles: false,
        users: true,
        repliedUser: true,
    },
    messageLimit: 10,
    restMode: true,
    defaultImageSize: 1024,
    disableEvents: [
        'CHANNEL_CREATE',
        'CHANNEL_UPDATE',
        'CHANNEL_DELETE',
        'GUILD_BAN_ADD',
        'GUILD_BAN_REMOVE',
        'GUILD_ROLE_CREATE',
        'GUILD_ROLE_DELETE',
        'GUILD_ROLE_UPDATE',
        'MESSAGE_DELETE_BULK'
    ],
});

const eventFiles = fs.readdirSync(__dirname + "/events/");

for (const file of eventFiles) {
  const eventHandler = await import(`./events/${file}`);
  const eventName = file.split(".")[0];
  console.log(eventName)
  console.log(eventHandler.default)
  client.on(eventName, (...args) => eventHandler.default(client, ...args));
}

await client.registry.registerCommands(__dirname + "/commands/") 
//console.log(await client.registry.reRegisterAll())
//console.log(client.registry.commands.map(x => x.name))

client.connect()
