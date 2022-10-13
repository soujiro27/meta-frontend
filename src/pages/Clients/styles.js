import styled from 'styled-components'

const CardStyled = styled.div`
  width: 90%;
  margin: 20px auto;
  padding: 8px;
  border: 1px solid #95a5a6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 3px #bdc3c7 ;

`
const AvatarStyled = styled.img`
  width: 100px;
  margin: 10px auto;
`

const TitleStyled = styled.p`
  background:#7f8c8d ;
  color:#fff;
  padding: 5px;
  border-radius: 5px 0px 0px 5px;
  margin-right: 2px;
  width: 75px;
  font-size: 14px;
`
const TextStyled = styled.p`
  background: #34495e  ;
  color: #fff;
  padding: 5px;
  border-radius: 0px 5px 5px 0px;
  font-size: 14px;
  width: 230px;
`

export { CardStyled, AvatarStyled, TitleStyled, TextStyled }
