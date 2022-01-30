const Eris = require('eris');
const Dispatcher = require('./Dispatcher');
const Registry = require('./Registry');
class Client extends Eris.Client {
    constructor(token, options) {
        super(token, options)
        this.rawOptions = options;
        this.owner = options.owner;
        this.users = new Eris.Collection(Eris.User, 100)
        this.dispatcher = new Dispatcher(this)
        this.registry = new Registry(this)
        this.on('interactionCreate', interaction => {
            this.dispatcher.handle(interaction)
        })
    }
}

module.exports = Client;