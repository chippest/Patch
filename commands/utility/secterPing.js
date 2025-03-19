const { SlashCommandBuilder, MessageFlags } = require("discord.js");

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("pings")
    .setDescription("Replies with a secret Pong!"),
  async execute(interaction) {
    await interaction.reply({
      content: "Secret Pong!",
      flags: MessageFlags.Ephemeral,
    });
  },
};
