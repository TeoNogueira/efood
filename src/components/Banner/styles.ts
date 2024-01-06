import styled from 'styled-components'

import banner from '../../assets/images/bg-dark.png'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
        
        margin-bottom: 56px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${banner});
        background-size: cover;

`

export const DeepCont = styled.div`
        display: flex;
        flex-direction: column;
        align-items: start;
        row-gap: 160px;
        color: ${colors.white};
        padding: 24px 0;
        font-size: 32px;

             
    @media (max-width: ${breakpoints.desktop}) {

        font-size: 24px;
    }

        span {
            font-weight: 100;
        }
`

export const TextBanner = styled.h3`
            font-weight: 900;
`