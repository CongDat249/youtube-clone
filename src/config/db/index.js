const mongoose = require('mongoose')

async function connect() {
   try {
      await mongoose.connect('mongodb://localhost:27017/youtube_dev')
      console.log('Connect database successfully')
   } catch (error) {
      console.error('Error')
   }
}

module.exports = { connect }