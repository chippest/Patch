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
    let personalizedRoast = randomRoast.replace(/{user}/g, `<@${target.id}>`);
    if (target.id === interaction.client.user.id) {
      const botResponses = [
        "Oh come on, you can't roast me!",
        "Should i call this bravery or are you just dumb?",
        "Haha,",
        "Is that the best you've got?",
        "Nice try, now try again dumbass, ",
        "You really thought you could roast me? Adorable!",
        "I appreciate the effort, jk, kys.",
        "Trying to roast me? Really?",
      ];
      personalizedRoast =
        botResponses[Math.floor(Math.random() * botResponses.length)] +
        " " +
        randomRoast.replace(/{user}/g, `<@${interaction.user.id}>`);
    }
    await interaction.reply(personalizedRoast);
  },
};
