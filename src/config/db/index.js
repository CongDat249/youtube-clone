const mongoose = require('mongoose')

const dbURL = 'mongodb+srv://CongDat:1234@cluster0.jnv3w.mongodb.net/acme?retryWrites=true&w=majority'

async function connect() {
   try {
      await mongoose.connect(dbURL)
      console.log('Connect database successfully')
   } catch (error) {
      console.error('Error')
   }
}

module.exports = { connect }