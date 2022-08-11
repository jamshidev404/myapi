const mongoose = require("mongoose");

const DistrictSchema = mongoose.Schema(
  {
    regionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "region",
    },
    district: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  },
);

module.exports = mongoose.model("district", DistrictSchema);
