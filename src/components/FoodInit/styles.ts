import styled from 'styled-components'

import { colors } from '../../styles'
import { TagCont } from '../Tag/styles';
import { Link } from 'react-router-dom';

// Cards
export const Container = styled.section`
        width: 100%;
        max-width: 472px;
        background-color: ${colors.white};
        border: 1px solid ${colors.rDark};
        position: relative;
        border-top: none;

        > img {
                width: 100%;
                height: 217px;
                max-height: 100%;     
        }


        ${TagCont} {

                margin-left: 8px;
        }

`

export const InfoContainer = styled.div`
        padding: 8px;
        margin-bottom: 4px;

        p {
                line-height: 22px;
                width: 456px;
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 32px;
        }
`

export const TagContent = styled.div`
        position: absolute;
        top: 16px;
        right: 16px;
     
`

export const TitleContent = styled.div`
        margin-bottom: 16px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;

`
export const RankContainer = styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
`

export const ButtonLink = styled(Link)`

        position: absolute;
        text-decoration: none;
        font-weight: 700;
        font-size: 14px;
        padding: 4px 6px;
        bottom: 8px;
        left: 8px;
        color: ${colors.rLight};
        background-color: ${colors.rDark};
        cursor: pointer;


`