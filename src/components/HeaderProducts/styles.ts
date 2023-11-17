import { Link } from 'react-router-dom'
import styled from 'styled-components'

import bgProduct from '../../assets/images/bg-header.png'
import { colors } from '../../styles'

export const Container = styled.div`
        padding: 36px 0 38px;
        background-image: url(${bgProduct});
        
`

export const DeepCont = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        font-weight: 900;
        
`

export const LinkHeader = styled.a`
        margin: 0 60px 0 0;
        text-decoration: none;
        color: ${colors.rDark};
`

export const LinkLogo = styled(Link)`
    text-decoration: none;
    margin: 0 auto;

`