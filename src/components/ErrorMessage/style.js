import styled from 'styled-components'

const StyledError = styled.p`
  color: #c0392b;
  text-align: ${props => props.align ? props.align : 'left'};
  align-self: flex-start;
`
export { StyledError }
