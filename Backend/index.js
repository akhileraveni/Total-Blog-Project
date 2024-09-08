const express = require('express')
const app = express()
const cors = require('cors')
let port = 3000
const mongoose = require('mongoose')
const blogRoute=require("./Route/routes")
require('dotenv').config()
// to resolve cors
app.use(cors())

app.use(express.json())
app.use("/",blogRoute)
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log('server running at port 3000')
    })
  })
  .catch(e => {
    console.log(e)
  })
