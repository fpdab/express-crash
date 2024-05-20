const output = document.querySelector("#output")
const button = document.querySelector("#get-posts-btn")
const form = document.querySelector("#add-post-form")

// get posts and move them to output
const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/posts")
    if (!res.ok) {
      throw new Error("Fetching failed")
    }
    const posts = await res.json()
    output.innerHTML = ""
    posts.forEach((post) => {
      const el = document.createElement("div")
      el.textContent = post.title
      output.appendChild(el)
    })
  } catch (error) {
    console.log(error)
  }
}

// add post function
async function addPost(e) {
  e.preventDefault()
  const formData = new FormData(this)
  const title = formData.get("title")
  try {
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
    if (!res.ok) {
      throw new Error("Failed adding post")
    }
    const newPost = await res.json()
    const postEl = document.createElement("div")
    postEl.textContent = newPost.title
    output.appendChild(postEl)
    getPosts()
  } catch (error) {
    console.error(error)
  }
}

// event listener
button.addEventListener("click", getPosts)
form.addEventListener("submit", addPost)
