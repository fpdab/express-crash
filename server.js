import express from "express"
import path from "path"
import posts from "./routes/posts.js"
import logger from "./middleware/logger.js"
import errorHandler from "./middleware/error.js"
import notfound from "./middleware/notfound.js"
const PORT = process.env.PORT

const app = express()

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Logger middleware
app.use(logger)

//manual static folder setup
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// })

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"))
// })

//setup static folder
const __dirname = import.meta.dirname
app.use(express.static(path.join(__dirname, "public")))

//Routes
app.use("/api/posts", posts)

//Error handler
app.use(notfound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
