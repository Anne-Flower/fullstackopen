const Blog = require('../models/blog');

const initialBlogs = [
  {
    title: 'Blog 1',
    author: 'Author 1',
    url: 'http://blo.com',
    likes: 1
  },
  {
    title: 'Blog 2',
    author: 'Author 2',
    url: 'http://blu.com',
    likes: 2
  },
  {
    title: 'Blog 3',
    author: 'Author 3',
    url: 'http://bli.com',
  }
];

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
};

module.exports = {
  initialBlogs,
  blogsInDb
};
