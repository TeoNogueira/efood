import styled from 'styled-components'
import {colors} from '../../styles'

import { Button } from '../ButtonAddCart/styles'

export const Container = styled.div`
    width: 320px;
    position: relative;
    background-color: ${colors.rDark};
    color: ${colors.rLight};

    > img {
        width: 100%;
        height: 167px;
        max-height: 100%;
        padding: 8px;
    
    }

`

export const SubCont = styled.div`
    padding 8px;
    margin-left: 10px;

    ${Button} {
        display: inline-block;
        width: 304px;
        text-decoration: none;
        text-align: center;
        margin-bottom: 8px;
        position: relative;
        right: 2px;
        
    }

    p {
    width: 304px;    
    margin-bottom: 8px;
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;

    }

`

export const TitleCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;

`