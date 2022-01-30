const Command = require("../../structures/Command");
const lala = require("@nekooftheabyss/lala");
const resolveColor = require('../../util/Color')
module.exports = class ChainCommand extends Command {
  constructor(client) {
    super(client, {
      name: "chainmail",
      description: "Generate a random chain mail.",
      group: "misc",
      options: [{
        type: 6,
        name: "user",
        description: "Name of the person.",
      }],
    });
  }
  async run(message, command) {
    let response = lala.random.chain();
    if (command.options) {
      const user = command.mentions.users.get(command.options.user);
      response = lala.random.chain(user.username);
    }
    const embed = {
      type: "rich",
      color: resolveColor("#ff00c3"),
      description: `\`${response}\``,
      author: {
        name: `${
          message.user ? message.user.username : message.member.user.username
        }'s chain mail:`,
        icon_url: message.user
          ? message.user.avatarURL
          : message.member.user.avatarURL,
      },
    };

    return message.createMessage({ embeds: [embed] });
  }
};
