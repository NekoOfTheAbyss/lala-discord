import Command from "../../structures/Command.js";

export default class PingCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ping",
      description: "Check the bot's ping to the server.",
      group: "util",
    });
  }
  async run(message, command) {
    await message.createMessage("Pinging...");
    return message.editOriginalMessage(
      `You require Lala's ping? It's ${
        Date.now() - (message.editedTimestamp || message.createdAt)
      }ms.`
    );
  }
};
