//validation
const Joi = require("@hapi/joi");

//Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  //   //lets validate the data before we make a user
  //   //   const validation = schema.validate(req.body);
  //   //   res.send(validation);

  //   //pull out the error message
  //   //validation.error
  //   const { error } = schema.validate(req.body);
  //   //   res.send(error.details[0].message);
  //   if (error) {
  //     return res.status(400).send(error.details[0].message);
  //   }

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
