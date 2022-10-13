import React from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from './style'

const Container = ({
  width,
  direction,
  justifyContent,
  alignItems,
  margin,
  padding,
  children,
  show
}) => {
  if (!show) return null

  return (
    <StyledContainer
      width={width}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      padding={padding}
    >
      { children }
    </StyledContainer>
  )
}

Container.propTypes = {
  justifyContent: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node.isRequired,
  margin: PropTypes.string,
  alignItems: PropTypes.string,
  direction: PropTypes.string,
  show: PropTypes.bool.isRequired,
  width: PropTypes.string
}

export { Container }
