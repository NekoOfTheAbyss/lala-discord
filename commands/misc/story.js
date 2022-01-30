const Command = require("../../structures/Command");
const lala = require("@nekooftheabyss/lala");
const resolveColor = require('../../util/Color')

module.exports = class BakaCommand extends Command {
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
    let response = lala.random.story();
    if (command.options) {
      const user = command.mentions.users.get(command.options.user);
      response = lala.random.story(user.username);
    }
    const embed = {
      type: "rich",
      color: resolveColor("#ff00c3"),
      description: `\`${response}\``,
      author: {
        name: `${
          message.user ? message.user.username : message.member.user.username
        }'s story:`,
        icon_url: message.user
          ? message.user.avatarURL
          : message.member.user.avatarURL,
      },
    };

    return message.createMessage({ embeds: [embed] });
  }
};
