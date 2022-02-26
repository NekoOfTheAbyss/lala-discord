import Command from "../../structures/Command.js";
import lala from "@nekooftheabyss/lala";

export default class CharacterCommand extends Command {
  constructor(client) {
    super(client, {
      name: "character",
      description: "Generate a weird fantasy character.",
      group: "misc",
    });
  }
  async run(message, command) {
    const response = lala.random.genCharacter();
    const embed = new this.client.util.Embed()
      .setColor("#ff00c3")
      .setDescription(`\`${response}\``)
      .setAuthor(
        `${command.author.username}'s character:`,
        command.author.iconURL
      );

    return message.createMessage({ embeds: [embed.json()] });
  }
};
