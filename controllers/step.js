const Step = require("../models/step");

exports.createStep = (req, res) => {
  const step = new Step(req.body);

  step
    .save()
    .then(() => {
      return res.status(201).json({ success: true, data: step });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
};

exports.getStep = async (req, res) => {
  await Step.find({ name: req.params.name }).exec((err, data) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, data });
  });
};
