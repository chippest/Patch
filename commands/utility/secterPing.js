const { SlashCommandBuilder, MessageFlags } = require("discord.js");

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName("pings")
    .setDescription("Replies with a lot of pops!"),
  async execute(interaction) {
    let pong = "# ||pop||";
    await interaction.reply(pong);
    const interval = setInterval(() => {
      pong = pong + " ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop||";
      if (pong.length < 2000) {
        interaction.editReply(pong);
      } else {
        clearInterval(interval);
        clearTimeout(timeout);
      }
    }, 150);
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 60000);
  },
};
