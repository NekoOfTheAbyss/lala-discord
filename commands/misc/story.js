import Command from "../../structures/Command.js";
import lala from "@nekooftheabyss/lala";

export default class BakaCommand extends Command {
  constructor(client) {
    super(client, {
      name: "story",
      description: "Generate a random story.",
      group: "misc",
      options: [{
        type: 6,
        name: "user",
        description: "Name of the protagonist.",
      }],
    });
  }
  async run(message, command) {
    let response = lala.random.genStory();
    if (command.options) {
      const user = command.mentions.users.get(command.options.user);
      response = lala.random.genStory(user.username);
    }
    const embed = new this.client.util.Embed()
      .setColor("#ff00c3")
      .setDescription(`\`${response}\``)
      .setAuthor(
        `${command.author.username}'s story:`,
        command.author.iconURL
      );

    return message.createMessage({ embeds: [embed.json()] });
  }
};
