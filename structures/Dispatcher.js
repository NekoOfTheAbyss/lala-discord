const Caller = require("./Caller");

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
        return this.client.registry.commands.get(command.command).run(message, command)
    }
}

module.exports = Dispatcher;