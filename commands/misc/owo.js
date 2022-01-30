const Command = require("../../structures/Command");
const lala = require("@nekooftheabyss/lala");
const resolveColor = require('../../util/Color')

module.exports = class OWOCommand extends Command {
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
    const response = lala.converter.owo(txt);
    const embed = {
      type: "rich",
      color: resolveColor("#ff00c3"),
      description: `\`${response}\``,
      author: {
        name: `${
          message.user ? message.user.username : message.member.user.username
        }'s text:`,
        icon_url: message.user
          ? message.user.avatarURL
          : message.member.user.avatarURL,
      },
    };

    return message.createMessage({ embeds: [embed] });
  }
};
