const { SlashCommandBuilder, MessageFlags } = require("discord.js");

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName("pings")
    .setDescription("Replies with a lot of pops!"),
  async execute(interaction) {
    let pong = "# ||pop||";
    await interaction.reply(pong);
    await interaction.followUp(pong + " ||pop||");
    await interaction.editReply(pong + " ||pop||" + " ||pop||");
  },
};
