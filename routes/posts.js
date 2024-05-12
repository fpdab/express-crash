import express from "express"
const router = express.Router()
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postcontroller.js"

//get all posts
router.get("/", getPosts)

//get single post
router.get("/:id", getPost)

//create post
router.post("/", createPost)

//update post
router.put("/:id", updatePost)

//delete post
router.delete("/:id", deletePost)

export default router
