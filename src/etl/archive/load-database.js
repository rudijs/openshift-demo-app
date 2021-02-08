"use strict"

const pgtools = require("pgtools")
const Pool = require("pg").Pool

const db = require("./lib/db")

const pool = new Pool({
  user: process.env.dbUser || "me",
  host: process.env.dbhost || "localhost",
  database: process.env.dbName || "api",
  password: process.env.dbPassword || "password",
  port: process.env.dbPort || 5432,
})

db.query(pgtools, {}, pool)
  .then((res) => console.log("res", res))
  .catch((err) => console.log("err", err))
  .finally(() => pool.end())
