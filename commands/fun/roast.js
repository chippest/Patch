const { SlashCommandBuilder, MessageFlags } = require("discord.js");
const roasts = require("./roastList.json");

module.exports = {
  cooldown: 0,
  data: new SlashCommandBuilder()
    .setName("roast")
    .setDescription("Roasts! A! User!")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("Select user to roast!")
        .setRequired(true)
    ),
  async execute(interaction) {
    const target = interaction.options.getUser("target");
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    const personalizedRoast = randomRoast.replace("{user}", `<@${target.id}>`);
    await interaction.reply(personalizedRoast);
  },
};
