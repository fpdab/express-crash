import express from "express"
import posts from "./routes/posts.js"
const PORT = process.env.PORT
//import path from "path"

const app = express()

//manual static folder setup
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// })

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"))
// })

//setup static folder
//app.use(express.static(path.join(__dirname, "public")))

app.use("/", posts)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))