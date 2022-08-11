const District = require("../models/district");

exports.createDistrict = (req, res) => {
  const district = new District(req.body);

  district
    .save()
    .then(() => {
      return res.status(201).json({ success: true, data: district });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

exports.getAllDistricts = async (req, res) => {
  await District.find().exec((err, data) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, data });
  });
};

exports.getOne = async (req, res) => {
  await District.findById({ _id: req.params.id }).exec((err, data) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, data });
  });
};
