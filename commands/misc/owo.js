import Command from "../../structures/Command.js";
import {owoify} from "@nekooftheabyss/lala";

export default class OWOCommand extends Command {
  constructor(client) {
    super(client, {
      name: "owoify",
      description: "OwOify given text.",
      group: "misc",
      options: [{
        type: 3,
        name: "text",
        required: true,
        description: "Text to owoify.",
      }],
    });
  }
  async run(message, command) {
    const txt = command.options.text;
    const response = owoify(txt);
    const embed = new this.client.util.Embed()
      .setColor("#ff00c3")
      .setDescription(`\`${response}\``)
      .setAuthor(
        `${command.author.username}'s text:`,
        command.author.iconURL
      );

    return message.createMessage({ embeds: [embed.json()] });
  }
};
