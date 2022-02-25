import Command from "../../structures/Command.js";
import lala from "@nekooftheabyss/lala";
export default class ChainCommand extends Command {
  constructor(client) {
    super(client, {
      name: "chainmail",
      description: "Generate a random chain mail.",
      group: "misc",
      options: [
        {
          type: 6,
          name: "user",
          description: "Name of the person.",
        },
      ],
    });
  }
  async run(message, command) {
    let response = lala.random.genChain();
    if (command.options) {
      const user = command.mentions.users.get(command.options.user);
      response = lala.random.genChain(user.username);
    }
    const embed = new this.client.util.Embed()
      .setColor("#ff00c3")
      .setDescription(`\`${response}\``)
      .setAuthor(
        `${command.author.username}'s chain mail:`,
        command.author.iconURL
      );

    return message.createMessage({ embeds: [embed.json()] });
  }
}
