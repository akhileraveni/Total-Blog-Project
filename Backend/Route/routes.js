const express = require('express')
const router = express.Router()
//get-blogs
const {Blog} = require('./model/models')
router.get('/get-all-blogs', async (req, res) => {
  try {
    const blogs = new Blog.find({})
    res.send({count: blogs.length, data: blogs})
  } catch (e) {
    console.log(e)
    res.status(400).send({message: 'something went wrong!!'})
  }
})
//get-single-blog
router.get('/blog:id', async (req, res) => {
  try {
    const id = req.params.id
    const response = await Blog.findById(id)
    console.log(response)
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(400).send({message: 'something went wrong!!'})
  }
})
//update
router.put('/blog:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    const response = await Blog.findByIdAndUpdate(id, data, {
      returnOriginal: false,
    })
    console.log(response)
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(400).send({message: 'something went wrong!!'})
  }
})
//delete blog
router.delete('/blog:id', async (req, res) => {
  try {
    const id = req.params.id
    const response = await Blog.findByIdAndDelete(id)
    console.log(response)
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(400).send({message: 'something went wrong!!'})
  }
})

//create-blog

router.post('/create-blog', async (req, res) => {
  try {
    const data = req.body
    const blog = new Blog(data)
    const response = await blog.save()
    console.log(response)
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(400).send({message: 'something went wrong!!'})
  }
})
module.exports = router
