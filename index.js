import { Client, Events, Routes, SlashCommandBuilder } from "discord.js";
import { config } from "dotenv";

import ping from "./commands/ping.js";
import e from "express";

const router = e.Router()  

const app = e()
app.use(e.json())
app.use(router)

app.listen(8080, ()=> console.log('Server listening on port 8080'))

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
    ping(inter)
  }
})



client.login(token)


/*
WORKFLOW:
/setup-email (Discord-server)
*/