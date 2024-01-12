import { Link } from 'react-router-dom'
import styled from 'styled-components'

import bgProduct from '../../assets/images/bg-header.png'
import { colors, breakpoints } from '../../styles'


export const Container = styled.div`

        padding: 40px 0 64px;
        background-image: url(${bgProduct});
        
`

export const DeepCont = styled.div`

        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        font-weight: 900;

        @media (max-width: ${breakpoints.tablet}) {

                align-items: center;
                gap: 32px;
                flex-direction: column;
        }
`

export const LinkHome = styled(Link)`

        text-decoration: none;

`

export const LinkHeader = styled.h2`

        margin-right: 80px;
        color: ${colors.rDark};
        font-size: 18px;

        @media (max-width: ${breakpoints.tablet}) {
                margin: 0 auto;
        }
`




export const LinkLogo = styled(Link)`

    text-decoration: none;
    margin: 0 auto;

`

export const CartButton = styled.a`

cursor: pointer;

`