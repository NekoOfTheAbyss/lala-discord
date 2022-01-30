const Command = require("../../structures/Command");
const lala = require("@nekooftheabyss/lala");
const resolveColor = require('../../util/Color')

module.exports = class SmugCommand extends Command {
  constructor(client) {
    super(client, {
      name: "name",
      description: "Generate a random fantasy-like name!",
      group: "misc",
    });
  }

  async run(message, command) {
    const response = lala.random.monster();

    const embed = {
      type: "rich",
      color: resolveColor("#ff00c3"),
      description: `\`${response}\``,
      author: {
        name: `${
          message.user ? message.user.username : message.member.user.username
        }'s requested name:`,
        icon_url: message.user
          ? message.user.avatarURL
          : message.member.user.avatarURL,
      },
    };

    return message.createMessage({ embeds: [embed] });
  }
};
