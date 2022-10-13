import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import imageCheck from '../../assets/images/001-check.png'

const LoaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter:blur(8px);
`

const LoaderImage = styled.img`
  margin-top: 40vh;
  margin-bottom: 20px;
`

const TitleStyled = styled.h2`
  color: #fff;
`

const ButtonStyled = styled.div`
  background-color: #27ae60;
  color: #fff;
  padding: 12px 8px;
  margin: 30px 0px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
`

const Loader = ({ isOpen }) => {
  const portal = document.getElementById('portal')
  const navigate = useNavigate()

  const home = () => {
    navigate('/')
  }

  if (!isOpen) return null
  return ReactDOM.createPortal(
      <LoaderStyled>
          <LoaderImage src={ imageCheck } alt='keobra' />
          <TitleStyled>Registro Exitoso</TitleStyled>
          <ButtonStyled onClick={home}>Volver al inicio</ButtonStyled>
      </LoaderStyled>,
      portal
  )
}

Loader.propTypes = {
  isOpen: PropTypes.bool
}

export { Loader }
