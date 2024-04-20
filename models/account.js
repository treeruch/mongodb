const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  emailId: String,
  name: String,
  password: Number,
  confirmPassword: Number
});

const AccountModel = mongoose.model('Account', accountSchema);

module.exports = AccountModel;