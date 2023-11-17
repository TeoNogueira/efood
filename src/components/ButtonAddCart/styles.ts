import styled from 'styled-components'
import { colors } from '../../styles'

import { Link } from 'react-router-dom'

export const Button = styled(Link)`

    background-color: ${colors.rLight};
    color: ${colors.rDark};
    padding: 4px 0;
    font-weight: bold;

`