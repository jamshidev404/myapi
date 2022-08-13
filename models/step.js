const mongoose = require("mongoose");

const StepSchema = mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Object, required: true },
});

module.exports = mongoose.model("Step", StepSchema);
