import Command from "../../structures/Command.js";
import lala from "@nekooftheabyss/lala";

export default class StringCommand extends Command {
  constructor(client) {
    super(client, {
      name: "string",
      description: "Generate a random alphanumeric string.",
      group: "misc",
      options: [{
        type: 4,
        name: "length",
        required: true,
        description: "Length of the string.",
      }],
    });
  }
  async run(message, command) {
    let len = command.options.length;
    if(len > 255) len = 255
    const response = lala.random.genString(len);
    const embed = new this.client.util.Embed()
      .setColor("#ff00c3")
      .setDescription(`\`${response}\``)
      .setAuthor(
        `${command.author.username}'s string:`,
        command.author.iconURL
      );

    return message.createMessage({ embeds: [embed.json()] });
  }
};
