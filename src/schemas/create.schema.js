import Joi from 'joi'

const name = Joi.string().required()
const firstName = Joi.string().required()
const lastName = Joi.string().required()
const address = Joi.string().required()
const age = Joi.number().min(18).max(60).required()
const phone = Joi.string().regex(/^[0-9]{10}$/).required()
const email = Joi.string().email({ tlds: { allow: false } }).required()

export {
  name,
  firstName,
  lastName,
  address,
  age,
  phone,
  email
}
