import { Client, Events, SlashCommandBuilder } from "discord.js";
import { config } from "dotenv";

const client = new Client({intents: []});
const noosphere = config().parsed
const token = noosphere.token


client.once(Events.ClientReady, c => {
  console.log(`${c.user.username} is ready to serve: `)

  const ping = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!")

  client.application.commands.create(ping);
})

client.on(Events.InteractionCreate, inter => {
  // console.log(inter)

  if (inter.commandName === "ping") {
    inter.reply("Pong!")
  }
})



client.login(token)


/*
WORKFLOW:
/setup-email (Discord-server)
*/