export default (client, interaction) => {
  if (interaction.type === 2) return client.dispatcher.handle(interaction);
};
