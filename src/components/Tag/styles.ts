import styled from 'styled-components'
import { colors } from '../../styles'

export const TagCont = styled.div`
    display: inline-block;
    font-size: 12px;
    padding: 6px 4px;
    color: ${colors.white};
    font-weight: bold;
    background-color: ${colors.rDark}; 
    

    &:first-letter {
        text-transform: uppercase;
}
`