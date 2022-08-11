const Region = require("../models/region");
const District = require("../models/district");

exports.createRegion = (req, res) => {
  const region = new Region(req.body);

  region
    .save()
    .then(() => {
      return res.status(201).json({ success: true, data: region });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

exports.getAllRegions = async (req, res) => {
  await Region.find().exec((err, data) => {
    if (err) {
      return res.status(404).json({ success: false, err });
    }
    return res.status(200).json({ success: true, data });
  });
};

exports.getOne = async (req, res) => {
  const result = await Region.findById({ _id: req.params.id })
  await District.find({ regionId: req.params.id }).exec((err, data) => {
    if (err) {
      return res.status(404).json({ success: false, err });
    }
    return res.status(200).json({ success: true, data: result, districts: data });
  });
}