const videoModel = require('../models/video')

class SiteController {
   index(req, res) {
      videoModel.find({}, (err, videos) => {
         if (!err) {
            videos = videos.map(video => video.toObject())
            res.render('home', { videos })
            return
         }
         console.log(err)
      })
   }
}

module.exports = new SiteController;
