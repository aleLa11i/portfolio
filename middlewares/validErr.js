const { response } = require("express");
const { validationResult } = require("express-validator");

const validErr = (req, res = response, next) => {

    console.log(req.body)

  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({
      ok: false,
      recibido:req.body,
      errors: err.mapped(),
    });
  }

  next();
};

module.exports = {
  validErr,
};
