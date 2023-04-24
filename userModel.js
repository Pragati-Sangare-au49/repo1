const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 5,
  },
  Email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  }
  
//   Profile_Picture : {
//     type: String,
//     required : true
//   },

// Video : {
//   type: String
//  }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
