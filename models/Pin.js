const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const pinSchema = new mongoose.Schema({
  owner: {type: ObjectId, ref: 'User'},
  url: String,
  description: String,
  likedBy: [{type: String, default: null}]
})

const Pin = mongoose.model('Pin', pinSchema);

module.exports = Pin;