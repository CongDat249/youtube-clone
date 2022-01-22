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

   async delete(req, res) {
      const id = req.params.id
      Video.findOneAndRemove({_id: id }, (doc) => {
         console.log(doc);
         res.redirect('/admin')
         return
      })
   }

   async edit(req, res) {
      const id = req.params.id
      Video.findOne({_id: id}, (err, video) => {
         if (!err) {
            res.render('form-edit', { video: video.toObject() })
            return;
         }
      })
   }

   async update(req, res) {
      const id = req.params.id
      const formData = req.body
      Video.updateOne({_id: id}, formData, (err) => {
         if (!err) {
            res.redirect('/admin')
            return;
         }
      })
   }
}

module.exports = new AdminController