// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   // Define user schema
// });

// module.exports = mongoose.model("User", userSchema);

// models/User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
