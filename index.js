import { Client } from "discord.js";
import { config } from "dotenv";

const client = new Client({intents: []});
const noosphere = config().parsed
const token = noosphere.token


client.login(token)


/*
WORKFLOW:
/setup-email (Discord-server)
*/