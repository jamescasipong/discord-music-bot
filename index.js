const { Client, GatewayIntentBits } = require('discord.js'); // Updated import for the latest version

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const prefix = '?'; // Command prefix

const responses = {
  "what is your name": "James Casipong",
  "how are you": "I'm just a bot, but I'm doing well!",
  "what is your favorite color": "I don't have a favorite color, but I like all colors!",
  "where are you from": "I exist in the digital world, so I don't have a physical location.",
  "what is the meaning of life": "The meaning of life is a philosophical question that has been debated for centuries.",
  "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
  "what is the weather like": "I don't have access to real-time weather data, but you can check a weather website or app for that information.",
  "how old are you": "As a bot, I don't age, but I was created to assist you!",
  "what can you do": "I can answer questions, list available commands, and much more! Just ask me anything.",
  // Add more questions and answers here
};



const commands = {
  "ask": `Ask a question. Usage: [${prefix}ask what is your name], [${prefix}ask how are you]`,
  "commands": "List all available commands.",
  "hello": "Greet the bot. Usage: [!hello]",
  "joke": "Get a joke from the bot. Usage: [!joke]",
  "weather": "Get a response about the weather. Usage: [!weather]",
  "age": "Ask the bot how old it is. Usage: [!age]",
  "info": "Get information about the bot. Usage: [!info]",
  // Add more commands and descriptions here
};


client.once('ready', () => {
    console.log('Bot is online!');
});


console.log(commands[0])

client.on('messageCreate', message => {
    if (message.author.bot) return; // Ignore bot messages

    for(let x in commands){
      console.log(`${prefix}${commands[x]}`)
      if(message.content.startsWith(`${prefix}${commands[x]}`)){
        message.reply(commands[x])
      }
    }

    // Handle the !ask command
    if (message.content.startsWith(`${prefix}ask`)) {
        const question = message.content.slice(prefix.length + 4).trim().toLowerCase(); // Remove '!ask ' and trim spaces
        
        if (responses[question]) {
            message.reply(responses[question]);
        } else {
            message.reply("Sorry, I don't know the answer to that question.");
        }
    }

    // Handle the !commands command
    if (message.content === `${prefix}commands`) {
        const commandList = Object.entries(commands)
            .map(([command, description]) => `${prefix}${command}: ${description}`)
            .join('\n');
        
        message.reply(`Here are the available commands:\n${commandList}`);
    }
});

client.login('MTI3MzE5Nzg5NDc1NjcyODg1Mg.GO8YUD.3zZA3ZI9SKYgY6kle5uX_oD5Jps9UOfTBMhl-o');
