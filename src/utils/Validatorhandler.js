const validatorHandler = (errors, types) => {
  errors.forEach(error => {
    const code = error.code
    const errorType = types.find(type => type.error === code)

    if (errorType.error) {
      error.message = errorType.message
    }
  })
  return errors
}

export { validatorHandler }
