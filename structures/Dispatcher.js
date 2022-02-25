import Caller from './Caller.js';

class Dispatcher {
    constructor(client) {
        this.client = client;
    }
    shouldHandle(message) {
        if(message.type !== 2) return false
        return true;

    }
    handle(message) {
        if(!this.shouldHandle(message)) return false;
        const command = new Caller(this.client, message.data, message)
        console.info(`${command.author.username} ran command ${command.command}`)
        const cmd = this.client.registry.commands.get(command.command)
        if(!cmd) return message.createMessage({content: "This command is either temporarily unavailable or deleted. Please join our support server for help. https://discord.gg/A69vvdK", flags: 64});
        if(cmd.nsfw) {
            console.log("NSFW!")
            if(!message.channel.nsfw) return message.createMessage({content: "This command can only be used in NSFW channels.", flags: 64})
        }
        return cmd.run(message, command)
    }
    parseArgs(str, type) {
        if(type == 6) {
            console.log(str)
            const matches = new RegExp(`^(?:<@!?)?([0-9]+)>?$`).exec(str)
            if(matches) return matches[1]
        }
        return str
    }
}

export default Dispatcher;