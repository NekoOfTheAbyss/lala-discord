import Command from "../../structures/Command.js";

export default class LalaCommand extends Command {
  constructor(client) {
    super(client, {
      name: "lala",
      description: "General info about lala",
      group: "misc",
    });
  }

  async run(message, command) {

    const response = `This is **La Lala**, created by [Neko Of The Abyss](https://nekooftheabyss.xyz/). Basically a bot created on the [lala project](https://github.com/NekoOfTheAbyss/lala). I call it **A collection of useless functions compiled into a Discord bot**. The current set of features include a story generator (\`/story\`), chain mail generator (\`/chain\`), random name and string generators (\`/name\`, \`/mob\` and \`/string\`), random email generator (\`/email\`), and an owoifier (\`/owoify\`).\nJoin our support server through [this link](https://discord.gg/G5jpusmDqw).`

    const embed = new this.client.util.Embed()
      .setColor("#ff00c3")
      .setDescription(`${response}`)
      .setAuthor(
        `${command.author.username}'s chain mail:`,
        command.author.iconURL
      )
        .addField("Guilds serving", `${this.client.guilds.size}`, true)
        .addField("Credits", `NeTT#1172 (Neko Of The Abyss)`, true)
      

    return message.createMessage({ embeds: [embed.json()] });
  }
};
