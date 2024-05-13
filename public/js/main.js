const output = document.querySelector("#output")
const button = document.querySelector("#get-posts-btn")

// get posts and move them to output
const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/post")
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

// event listener
button.addEventListener("click", getPosts)
