const mongoose = require("mongoose");

const codeSchema = mongoose.Schema({
  code: {
    type: Number,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

module.exports = mongoose.model("Code", codeSchema);
