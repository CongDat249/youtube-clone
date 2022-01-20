const site = require('./site')
const videos = require('./videos')
const admin = require('./admin')

function routes(app) {
   app.use('/admin', admin)
   app.use('/videos', videos)
   app.use('/', site)
}

module.exports = routes