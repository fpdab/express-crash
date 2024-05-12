let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
]

export const getPosts = (req, res) => {
  const limit = Number(req.query.limit)
  if (limit > 0 && limit <= posts.length) {
    res.status(200).json(posts.slice(0, limit))
  } else {
    res.status(200).json(posts)
  }
}

export const getPost = (req, res, next) => {
  const id = Number(req.params.id)
  const post = posts.find((post) => post.id === id)

  if (!post) {
    const error = new Error(`A post with id ${id} was not found`)
    error.status = 404
    next(error)
  } else {
    res.status(200).json(post)
  }
}

export const createPost = (req, res, next) => {
  if (!req.body.title) {
    const error = new Error("Please include title")
    error.status = 400
    next(error)
  } else {
    posts.push({ id: posts.length + 1, title: req.body.title })
    res.status(201).json(posts)
  }
}

export const updatePost = (req, res, next) => {
  const id = Number(req.params.id)
  const post = posts.find((post) => post.id === id)
  if (!post) {
    const error = new Error(`A post with id ${id} was not found`)
    error.status = 404
    next(error)
  } else {
    post.title = req.body.title
    res.status(200).json(posts)
  }
}

export const deletePost = (req, res, next) => {
  const id = Number(req.params.id)
  const post = posts.find((post) => post.id === id)
  if (!post) {
    const error = new Error(`A post with id ${id} was not found`)
    error.status = 404
    next(error)
  } else {
    post.title = "Deleted"
    res.status(200).json(posts)
  }
}
