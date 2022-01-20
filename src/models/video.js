const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.plugin(slug)

const Video = new Schema({
   title: { type: String, default: "" },
   channel: { type: String, default: "" },
   view: { type: Number, min: 0 },
   src: { type: String, default: "" },
   createdAt: { type: Date, default: Date.now },
   slug: { type: String, slug: ['title', 'channel'], unique: true },
   thumbnail: { type: String, default: "" },
});

module.exports = mongoose.model('Video', Video)
