const Command = require("../../structures/Command");
const lala = require("@nekooftheabyss/lala");
const resolveColor = require('../../util/Color')

module.exports = class LalaCommand extends Command {
  constructor(client) {
    super(client, {
      name: "lala",
      description: "General info about lala",
      group: "misc",
    });
  }

  async run(message, command) {

    const response = `This is **La Lala**, created by [Neko Of The Abyss](https://nekooftheabyss.xyz/).Basically a bot created on the [lala project](https://github.com/NekoOfTheAbyss/lala). I call it **A collection of useless functions compiled into a Discord bot**. The current set of features include a story generator (\`/story\`), chain mail generator (\`/chain\`), random name and string generators (\`/name\`, \`/mob\` and \`/string\`), random email generator (\`/email\`), and an owoifier (\`/owoify\`).\nJoin our support server through [this link](https://discord.gg/G5jpusmDqw).`

    const embed = {
      type: "rich",
      color: resolveColor("#ff00c3"),
      description: `${response}`,
      fields: [
        {name: "Guilds serving", value: `${this.client.guilds.size}`, inline: true},
        {name: "Credits", value: `NeTT#1172 (Neko Of The Abyss)`, inline: true}
      ],
      author: {
        name: `La Lala's Personal Data`,
        icon_url: message.user
          ? message.user.avatarURL
          : message.member.user.avatarURL,
      },
    };

    return message.createMessage({ embeds: [embed] });
  }
};
