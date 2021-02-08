const pgtools = require("pgtools")
const Pool = require("pg").Pool

const db = require("./db")

const config = {
  user: process.env.dbUser || "me",
  password: process.env.dbPassword || "password",
  // database: process.env.dbName || "api",
  host: process.env.dbhost || "localhost",
  port: process.env.dbPort || 5432,
}

const pool = new Pool(config)

describe("db", () => {
  it("#query should return results", async () => {
    const res = await db.query(pgtools, config, pool)
    console.log(res)
    pool.end()
  })
})
