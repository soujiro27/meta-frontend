import React from 'react'
import PropTypes from 'prop-types'
import { CardStyled, AvatarStyled, TitleStyled, TextStyled } from './styles'
import { Container } from '../../components/Container'
import avatar from '../../assets/images/user.png'

const ClientCard = ({ client }) => (
  <CardStyled>
    <AvatarStyled src={ avatar } alt='avatar' />
    <Container
      justifyContent="flex-start"
      alignItems="center"
      show={true}
      margin="8px 0px"
    >
      <TitleStyled>Nombre:</TitleStyled>
      <TextStyled>{`${client.name} ${client.firstName} ${client.lastName}`}</TextStyled>
    </Container>

    <Container
       justifyContent="flex-start"
      alignItems="center"
      show={true}
      margin="8px 0px"
    >
      <TitleStyled>Direccion: </TitleStyled>
      <TextStyled>{client.address}</TextStyled>
    </Container>

    <Container
       justifyContent="flex-start"
      alignItems="center"
      show={true}
      margin="8px 0px"
    >
      <TitleStyled>Telefono: </TitleStyled>
      <TextStyled>{client.phone}</TextStyled>
    </Container>

    <Container
      justifyContent="flex-start"
      alignItems="center"
      show={true}
      margin="8px 0px"
    >
      <TitleStyled>Edad: </TitleStyled>
      <TextStyled>{client.age}</TextStyled>
    </Container>

    <Container
       justifyContent="flex-start"
      alignItems="center"
      show={true}
      margin="8px 0px"
    >
      <TitleStyled>Email: </TitleStyled>
      <TextStyled>{client.email}</TextStyled>
    </Container>
  </CardStyled>
)

ClientCard.propTypes = {
  client: PropTypes.object
}

export { ClientCard }
