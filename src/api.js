const express = require("express")
const serverless = require("serverless-http")

const app = express()
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List")
})

app.use("/.netlify/funtions/api", router)
module.exports.handler = serverless(app)