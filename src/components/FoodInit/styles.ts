import styled from 'styled-components'

import { colors } from '../../styles'
import { ButtonLink } from '../Link/styles'
import { TagCont } from '../Tag/styles';


export const Container = styled.section`
        width: 100%;
        max-width: 472px;
        background-color: transparent;
        border: 1px solid ${colors.rDark};
        position: relative;
        border-top: none;

        > img {
                width: 100%;
                height: 217px;
                max-height: 100%;     
        }


        ${ButtonLink} {
                position: relative;
                top: 2px;
                text-decoration: none;
                
        }

        ${TagCont} {

                margin-left: 16px;
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
                padding-bottom: 16px;
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