import React from 'react'
import PropTypes from 'prop-types'
import { StyledImage, StyledTitle, StyledButton } from './styles'
import { Container } from '../../components/Container'
import homeImage from '../../assets/images/home.jpg'

const HomeUi = ({ handleClick }) => (
  <Container
    justifyContent='center'
    alignItems='center'
    show={true}
    direction='column'
  >
      <StyledImage src={homeImage} alt='home' />
    <Container
      direction='column'
      justifyContent='space-between'
      alignItems='center'
      show={true}
    >
      <StyledButton
        value='create'
        onClick={handleClick}
      >
        Nuevo Cliente
      </StyledButton>

      <StyledButton
        value="list"
        onClick={handleClick}
      >
        Listado de clientes
      </StyledButton>
    </Container>
    <StyledTitle>Gestion de clientes</StyledTitle>

  </Container>
)

HomeUi.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export { HomeUi }
