const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  name: String,
  title: String,
  summary: String,
  email: String,
  phone: String,
  avatar: String,
  education: [
    {
      school: String,
      degree: String,
      year: String,
      certificateLink: String
    }
  ]
});

module.exports = mongoose.model('UserInfo', userInfoSchema);
