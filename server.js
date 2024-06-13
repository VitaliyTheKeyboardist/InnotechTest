const express = require("express")
const serverResponse = require("./serverResponse")

const app = express()

app.get("/listDeposits", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(serverResponse)
})

app.listen(3000)
