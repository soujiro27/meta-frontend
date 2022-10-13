import React from 'react'
import PropTypes from 'prop-types'
import { StyledInput } from './style'

const Input = ({ type, placeholder, name, register }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired
}

export { Input }
