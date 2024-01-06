import styled from 'styled-components'

import imgHeader from '../../assets/images/bg-header.png'

import { breakpoints } from '../../styles'

export const Container = styled.header`
    padding: 40px;
    margin-bottom: 80px;
    background-image: url(${imgHeader});
    text-align: center;
`

export const TextHeader = styled.h2`
    width: 540px;
    margin: 136px auto 0;
    font-size: 36px;
    font-weight: 900;
    line-height: 42px;

    @media (max-width: ${breakpoints.tablet}) {

        max-width: 100%;
        font-size: 24px;
        margin: 80px 0 0 0;
    }
`