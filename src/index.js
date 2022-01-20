const express = require('express')
const exhbs = require('express-handlebars');
const path = require('path')
const routes = require('./routes')
const db = require('./config/db')

const app = express();
const port = process.env.PORT || 3000

// Setup middleware
app.use(express.urlencoded({
   extended: true
}))
app.use(express.json())

// Setup template engine
app.engine('hbs', exhbs.engine({
   extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))

// Setup routes
routes(app)

// Connect to database
db.connect()

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`)
})