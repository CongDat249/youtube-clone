const videoModel = require('../models/video')

class VideoController {
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

   async detail(req, res) {
      const slug = req.params.slug;
      videoModel.findOne({ slug }, (err, video) => {
         if (!err) {
            res.render('detail', { video: video.toObject() })
            return;
         }
         console.log(err);
      });
   }

}

module.exports = new VideoController;

