"use strict"

const express = require("express")
const bodyParser = require("body-parser")
const hs = require("./lib/format").hs

const app = express()
const host = "0.0.0.0"
const port = 3000

const Pool = require("pg").Pool
const pool = new Pool({
  user: process.env.dbUser || "me",
  host: process.env.dbhost || "localhost",
  database: process.env.dbName || "api",
  password: process.env.dbPassword || "password",
  port: process.env.dbPort || 5432,
})

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
  console.log(`==> Got request: ${req.path}`)
  console.log(`==> at ${new Date().toLocaleString()}`)
  res.send(webPage("Home Page!", "Home Page"))
})

app.get("/users", (req, res) => {
  console.log(`==> Got request: ${req.path}`)
  console.log(`==> at ${new Date().toLocaleString()}`)
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      // throw error
      console.log(error)
      return res.send(webPage("Error", "Something went wrong."))
    }
    // res.status(200).json(results.rows)
    console.log(results.rows)
    const users = results.rows
    const text = `<p>Users:</p><p>${users[0].name} => ${users[0].email}</p><p>${users[1].name} => ${users[1].email}</p>`

    res.send(webPage("Users", text))
  })
})

app.get("/favicon.ico", (req, res) => {
  res.sendFile(__dirname + "/favicon.ico")
})

app.get("*", (req, res) => {
  console.log(`==> Got 404 request: ${req.path}`)
  console.log(`==> at ${new Date().toLocaleString()}`)
  res.send(webPage("404 Page Not Found", "PageNotFound"))
})

app.listen(port, host)
console.log(`Running on http://${host}:${port}`)

function webPage(title, text) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="refresh" content="1" />
    <title>${title}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
    <style>
      body {
        background-color: lightblue;
        /* background-color: lightyellow; */
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center; /*centers items on the line (the x-axis by default)*/
        align-items: center; /*centers items on the cross-axis (y by default)*/
      }
    </style>
  </head>
  <body>
<h1>
<script>
document.write(new Date().toLocaleString())
</script>
<br><br>
<script>
document.write(window.location.href)
  </script>
  <br><br>
  ${hs(text)}
  <br><br>
  </h1>
  </body>
</html>
`
}
