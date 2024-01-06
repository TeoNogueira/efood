import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
    background-color: ${colors.rLight};
    margin-top: 120px;
    padding: 40px;
    text-align: center;

    
`

export const TextSmall = styled.p`
    width: 100%;
    margin: 0 auto;
    max-width: 800px;
    

`

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 32px 0 80px;
    
`

export const Anchor = styled.a`
text-decoration: none;
`


export const LinkLogo = styled(Link)`
    text-decoration: none;

`