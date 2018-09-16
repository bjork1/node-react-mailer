const mongoose = require('mongoose');
const { Schema } = mongoose;

const userShema = new Schema({
  googleID: String
});

mongoose.model('users', userShema);
