const Video = require('../models/video')

class AdminController {
   async index(req, res) {
      const videos = (await Video.find({})).map(video => video.toObject())
      res.render('admin', { videos })
   }

   async new(req, res) {
      res.render('form-new')
   }

   async create(req, res) {
      let formData = req.body
      Video.create(formData, (err) => {
         if (!err) {
            res.redirect('/admin')
            return;
         }
      })
   }
}

module.exports = new AdminController