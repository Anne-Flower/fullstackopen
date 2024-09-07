const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

// GET all
blogsRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

// GET one specific
blogsRouter.get("/:id", (request, response, next) => {
  Blog.findById(request.params.id)
    .then((blog) => {
      if (blog) {
        response.json(blog);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// POST
blogsRouter.post("/", async (request, response, next) => {

const body = request.body;

const newBlog = new Blog({
  title: body.title,
  author: body.author,
  url: body.url,
  likes: body.likes || 0,
});

try {
  const savedBlog = await newBlog.save();
  response.status(201).json(savedBlog);
} catch (error) {
  next(error);
}
})

// DELETE
blogsRouter.delete("/:id", async (request, response, next) => {
try {
  await Blog.findByIdAndDelete(request.params.id);
  response.status(204).end();
} catch (error) {
  next(error);
}
});

// DELETE
blogsRouter.delete("/:id", (request, response, next) => {
  Blog.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
});

// PUT
blogsRouter.put("/:id", (request, response, next) => {
  const body = request.body;

  const updatedBlog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
  };

  Blog.findByIdAndUpdate(request.params.id, updatedBlog, { new: true })
    .then((updatedBlog) => {
      response.json(updatedBlog);
    })
    .catch((error) => next(error));
});

module.exports = blogsRouter
