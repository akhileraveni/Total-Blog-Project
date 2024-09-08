const mongoose = require('mongoose')
const {Schema} = mongoose
const blogsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  {timestamps: true},
)
const Blog = mongoose.model('blog', blogsSchema)
module.exports = Blog
