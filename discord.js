const { Client, IntentsBitField, Events } = require('discord.js');

// Create a new client instance with necessary intents
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,             // For guild-related events
    IntentsBitField.Flags.GuildMessages,      // For message-related events
    IntentsBitField.Flags.GuildVoiceStates,   // For voice state updates
    IntentsBitField.Flags.MessageContent      // To read message content
  ]
});

// Log a message when the bot is ready
client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Log in to Discord with your bot's token
client.login('MTI3MzE5Nzg5NDc1NjcyODg1Mg.GO8YUD.3zZA3ZI9SKYgY6kle5uX_oD5Jps9UOfTBMhl-o'); // Replace with your bot's token
