import Command from "../../structures/Command.js";
import lala from "@nekooftheabyss/lala";

export default class RaceCommand extends Command {
  constructor(client) {
    super(client, {
      name: "race",
      description: "Generate a random fantasy-like race (I didn't expect it to become this weird ngl)!",
      group: "misc",
    });
  }

  async run(message, command) {
    const response = lala.random.genRace(true);

    const embed = new this.client.util.Embed()
      .setColor("#ff00c3")
      .setDescription(`\`${response}\``)
      .setAuthor(
        `${command.author.username}'s generated race:`,
        command.author.iconURL
      );

    return message.createMessage({ embeds: [embed.json()] });
  }
};
