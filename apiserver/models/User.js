const mongoose = require("mongoose");
const logger = require("../scripts/logger/Users")
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// UserSchema.pre('find', () => {
//   logger.log({
//     level: "error",
//     message: doc
//   })
// })
// UserSchema.pre('findOne', () => {
//   logger.log({
//     level: "info",
//     message: doc
//   })
// })

 UserSchema.post('save', () => {
   logger.log({
     level: "info",
   })
 })


module.exports = mongoose.model("User", UserSchema);