
const createErrors = {
  name: [
    {
      error: 'string.empty',
      message: 'El campo no puede estar vacio'
    }
  ],
  firstName: [
    {
      error: 'string.empty',
      message: 'El campo no puede estar vacio'
    }
  ],
  lastName: [
    {
      error: 'string.empty',
      message: 'El campo no puede estar vacio'
    }
  ],
  address: [
    {
      error: 'string.empty',
      message: 'El campo no puede estar vacio'
    }
  ],
  age: [
    {
      error: 'number.base',
      message: 'El campo no puede estar vacio'
    }
  ],
  phone: [
    {
      error: 'string.empty',
      message: 'El campo no puede estar vacio'
    }
  ],
  email: [
    {
      error: 'string.empty',
      message: 'El campo no puede estar vacio'
    },
    {
      error: 'string.pattern.base',
      message: 'El campo no tiene el formato correcto'
    },
    {
      error: 'string.email',
      message: 'El email no es valido'
    }
  ]
}

export { createErrors }
