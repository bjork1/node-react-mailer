const mongoose = require('mongoose');
const { Schema } = mongoose;

const userShema = new Schema({
  googleID: String,
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model('users', userShema);
