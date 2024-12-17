import { config } from "dotenv";

import knex from "knex";
const knexFile = require('./knexfile')

const db = knex(knexFile.development)

export default function database() {
  const envInfo = config().parsed
  const dbUser = envInfo.db_user
  const dbPass = envInfo.db_password
  
  const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: dbUser,
      password: dbPass,
      database: 'gazelem',
    },
  });
}