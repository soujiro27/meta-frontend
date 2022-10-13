import styled from 'styled-components'

const StyledContainer = styled.div`
display: flex;
width: ${props => props.width ? props.width : '100%'};
flex-direction: ${props => props.direction ? props.direction : 'row'};
justify-content: ${props => props.justifyContent};
align-items: ${props => props.alignItems};
margin: ${props => props.margin ? props.margin : '0px'};
padding: ${props => props.padding ? props.padding : '0px'};
position: relative;
`

export { StyledContainer }
