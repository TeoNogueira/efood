import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'


export const ButtonLink = styled(Link)`
    background-color: ${colors.rDark};
    cursor: pointer;
    padding: 4px; 6px;
    font-weight: bold;
    color: ${colors.rLight};
`