const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./tests_helper')
const Blog = require('../models/blog')

const api = supertest(app)

beforeEach(async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(helper.initialBlogs);
});


test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 100000)



test('unique identifier property is named id', async () => {
  const response = await api.get('/api/blogs')

  response.body.forEach(blog => {
    expect(blog.id).toBeDefined()
  })
})


test('a valid blog can be added ', async () => {
  const newBlog = {
    title: 'New Blog',
    author: 'Jonny',
    url: 'http://jojo.com',
    likes: 5
  }
  
  await api
  .post('/api/blogs')
  .send(newBlog)
  .expect(201)
  .expect('Content-Type', /application\/json/)
  
  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  
  const titles = blogsAtEnd.map(b => b.title)
  expect(titles).toContain('New Blog')
})

test('if likes property is missing i will return 0', async () => {
  const newBlog = {
    title: 'New Blog',
    author: 'Jonny',
    url: 'http://jojo.com',
  }
  
  const response = await api
  .post('/api/blogs')
  .send(newBlog)
  .expect(201)
  .expect('Content-Type', /application\/json/)
  
  
  expect(response.body.likes).toBe(0)
  
})


afterAll(async () => {
  await mongoose.connection.close()
})