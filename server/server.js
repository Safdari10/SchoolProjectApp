const express = require("express")
require("dotenv").config()
const cors = require("cors")

const loginSignupRouter = require("./router/loginSignupRoute")
const studentContentRouter = require("./router/StudentContentRoute")



const app = express()

//middleware
app.use(cors())
app.use(express.json())

// use the created routes

app.use('/api', loginSignupRouter)
app.use("/api", studentContentRouter)

// create port

const port = process.env.PORT 
app.listen(port, () => {
    console.log(`Server Listening on http://localhost:${port}`)
})