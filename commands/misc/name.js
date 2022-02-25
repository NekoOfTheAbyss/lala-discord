import Command from "../../structures/Command.js";
import lala from "@nekooftheabyss/lala";

export default class NameCommand extends Command {
  constructor(client) {
    super(client, {
      name: "name",
      description: "Generate a random name.",
      group: "misc",
      options: [{
        type: 4,
        name: "length",
        required: true,
        description: "Length of the name.",
      }],
    });
  }
  async run(message, command) {
    let len = command.options.length;
    if (len > 255) len = 255;
    const response = lala.random.genName(len);
    const embed = new this.client.util.Embed()
      .setColor("#ff00c3")
      .setDescription(`\`${response}\``)
      .setAuthor(
        `${command.author.username}'s name:`,
        command.author.iconURL
      );

    return message.createMessage({ embeds: [embed.json()] });
  }
};
