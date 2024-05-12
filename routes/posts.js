import express from "express"
const router = express.Router()

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
]

//get all posts
router.get("/", (req, res) => {
  const limit = Number(req.query.limit)
  if (limit > 0 && limit <= posts.length) {
    res.status(200).json(posts.slice(0, limit))
  } else {
    res.status(200).json(posts)
  }
})

//get single post
router.get("/:id", (req, res) => {
  const id = Number(req.params.id)
  const post = posts.find((post) => post.id === id)

  if (!post) {
    res.status(404).json({ message: `A post with id ${id} was not found` })
  } else {
    res.status(200).json(post)
  }
})

//create post
router.post("/", (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ message: "Please include title" })
  } else {
    posts.push({ id: posts.length + 1, title: req.body.title })
    res.status(201).json(posts)
  }
})

//update post

router.put("/:id", (req, res) => {
  const id = Number(req.params.id)
  const post = posts.find((post) => post.id === id)
  if (!post) {
    res.status(404).json({ message: `A post with id ${id} was not found` })
  } else {
    post.title = req.body.title
    res.status(200).json(posts)
  }
})

//delete post

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id)
  const post = posts.find((post) => post.id === id)
  if (!post) {
    res.status(404).json({ message: `A post with id ${id} was not found` })
  } else {
    post.title = "Deleted"
    res.status(200).json(posts)
  }
})

export default router
