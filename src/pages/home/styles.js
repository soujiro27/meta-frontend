import styled from 'styled-components'

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`

const StyledTitle = styled.h1`
  position: absolute;
  top: 30%;
  left: 10%;
  color: #fff;
  width: 100%;
  text-shadow: 3px 3px 3px rgba(0,0,0,.5);
`

const StyledButton = styled.button`
  background: #1abc9c;
  color:#fff;
  padding: 8px;
  width: 200px;
  margin: 10px ;
  border:none;
  outline: none;
  font-weight: bold;
  border-radius: 4px;
  &:hover{
    box-shadow: 3px 3px 3px rgba(0,0,0,.5);
  }
`

export {
  StyledImage,
  StyledTitle,
  StyledButton
}
