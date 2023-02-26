const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isDoctor: {
    type: Boolean,
    default: false,
  },
  notification: {
    type: Array,
    default: []
  },
  seenNotification: {
    type: Array,
    default: []
  }
},
  {
    timestamp: true
  }
);

// export schema
const userMode = mongoose.model("users", userSchema);
module.exports = userMode;