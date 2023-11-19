import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'


export const ButtonLink = styled(Link)`
    background-color: ${colors.rDark};
    cursor: pointer;
    padding: 4px 8px;
    font-weight: 700;
    color: ${colors.rLight};
    font-size: 14px;



`