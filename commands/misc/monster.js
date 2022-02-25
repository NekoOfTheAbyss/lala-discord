import Command from "../../structures/Command.js";
import lala from "@nekooftheabyss/lala";

export default class MonsterCommand extends Command {
  constructor(client) {
    super(client, {
      name: "monster",
      description: "Generate a random fantasy-like name!",
      group: "misc",
    });
  }

  async run(message, command) {
    const response = lala.random.genMonster();

    const embed = new this.client.util.Embed()
      .setColor("#ff00c3")
      .setDescription(`\`${response}\``)
      .setAuthor(
        `${command.author.username}'s requested name:`,
        command.author.iconURL
      );

    return message.createMessage({ embeds: [embed.json()] });
  }
};
