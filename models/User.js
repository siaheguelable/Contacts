const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    favoriteColor: { type: String, required: true },
    birthday: { type: Date, required: true },
  },
  { collection: 'contacts' },
);

module.exports = mongoose.model('User', userSchema);
