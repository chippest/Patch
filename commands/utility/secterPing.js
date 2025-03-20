const { SlashCommandBuilder, MessageFlags } = require("discord.js");

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName("pings")
    .setDescription("Replies with a lot of pops!"),
  async execute(interaction) {
    let pong = "# ||pop||";
    await interaction.reply(pong);
    const interval = setInterval(async () => {
      pong = pong + " ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop||";
      if (pong.length < 2000) {
        await interaction.editReply(pong);
      } else {
        clearInterval(interval);
        clearTimeout(timeout);
        await interaction.followUp(
          `Message limit reached, give me nitro so i can send longer messages :P`
        );
      }
    }, 150);
    const timeout = setTimeout(async () => {
      clearInterval(interval);
      await interaction.followUp(
        `Message limit reached, give me nitro so i can send longer messages :P`
      );
    }, 60000);
  },
};
