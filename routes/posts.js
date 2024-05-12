import express from "express"
const router = express.Router()

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
]

//get all posts
router.get("/api/posts", (req, res) => {
  const limit = Number(req.query.limit)
  if (limit > 0 && limit <= posts.length) {
    res.status(200).json(posts.slice(0, limit))
  } else {
    res.status(200).json(posts)
  }
})

//get single post
router.get("/api/posts/:id", (req, res) => {
  const id = Number(req.params.id)
  const post = posts.find((post) => post.id === id)

  if (!post) {
    res.status(404).json({ message: `A post with id ${id} was not found` })
  } else {
    res.status(200).json(post)
  }
})

export default router
