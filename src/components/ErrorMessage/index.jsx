import React from 'react'
import PropTypes from 'prop-types'
import { StyledError } from './style'

const ErrorMessage = ({ message }) => {
  if (!message) return null

  return (
    <StyledError>
      { message }
    </StyledError>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export { ErrorMessage }
