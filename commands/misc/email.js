const Command = require("../../structures/Command");
const lala = require("@nekooftheabyss/lala");
const resolveColor = require('../../util/Color')

module.exports = class EmailCommand extends Command {
  constructor(client) {
    super(client, {
      name: "email",
      description: "Generate a random email ID.",
      group: "misc",
      options: [{
        type: 5,
        name: "common",
        required: true,
        description: "Use a common email instead of a random one?",
      }],
    });
  }
  async run(message, command) {
    const len = command.options.common;
    const response = lala.random.email(len);
    const embed = {
      type: "rich",
      color: resolveColor("#ff00c3"),
      description: `\`${response}\``,
      author: {
        name: `${
          message.user ? message.user.username : message.member.user.username
        }'s email:`,
        icon_url: message.user
          ? message.user.avatarURL
          : message.member.user.avatarURL,
      },
    };

    return message.createMessage({ embeds: [embed] });
  }
};
