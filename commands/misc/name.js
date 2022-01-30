const Command = require("../../structures/Command");
const lala = require("@nekooftheabyss/lala");
const resolveColor = require('../../util/Color')

module.exports = class NameCommand extends Command {
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
    const response = lala.random.name(len);
    const embed = {
      type: "rich",
      color: resolveColor("#ff00c3"),
      description: `\`${response}\``,
      author: {
        name: `${
          message.user ? message.user.username : message.member.user.username
        }'s name:`,
        icon_url: message.user
          ? message.user.avatarURL
          : message.member.user.avatarURL,
      },
    };

    return message.createMessage({ embeds: [embed] });
  }
};
