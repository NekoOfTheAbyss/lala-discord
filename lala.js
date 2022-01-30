const Client = require("./structures/Client");
const config = require("./config")

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

client.registry.registerCommands(__dirname + "/commands/")
console.log(client.registry.commands.map(x => x.name))

client.connect()