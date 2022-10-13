import Joi from 'joi'
import {
  name,
  firstName,
  lastName,
  address,
  age,
  phone,
  email
} from '../schemas/create.schema'
import { createErrors } from '../errors/create.errors'
import { validatorHandler } from '../utils/Validatorhandler'

const createMiddleware = Joi.object({
  name: name.error(errors => {
    return validatorHandler(errors, createErrors.name)
  }),
  firstName: firstName.error(errors => {
    return validatorHandler(errors, createErrors.firstName)
  }),
  lastName: lastName.error(errors => {
    return validatorHandler(errors, createErrors.lastName)
  }),
  address: address.error(errors => {
    return validatorHandler(errors, createErrors.address)
  }),
  age: age.error(errors => {
    return validatorHandler(errors, createErrors.age)
  }),
  phone: phone.error(errors => {
    return validatorHandler(errors, createErrors.phone)
  }),
  email: email.error(errors => {
    return validatorHandler(errors, createErrors.email)
  })
})

export { createMiddleware }
