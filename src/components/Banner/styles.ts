import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
        
        margin-bottom: 56px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: block;
        position: relative;
        height: 280px;
        width: 100%;

        &::after {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.7);
            content: '';

        }
        

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