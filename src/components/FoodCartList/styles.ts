import styled from 'styled-components'
import { colors } from '../../styles'



export const Button = styled.button`

        position: absolute;
        padding: 4px;
        font-weight: bold;
        color: ${colors.rDark};
        background-color: ${colors.rLight};
        border: none;
        margin: 16px;
        bottom: 0;
        left: 0;
        max-width: 90%;
   
        &:hover {
                cursor: pointer;
        }
`


export const Container = styled.ul`

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 40px;
        row-gap: 32px;

        li {
                background-color: ${colors.rDark};
                color: ${colors.rLight};
                position: relative;
                width: 320px;

           > img {

                width: 100%;
                height: 160px;
                max-weight: 100%;
                padding: 8px;

                }
        }
        


`


export const InfoCont = styled.div`

        p {
                line-height: 22px;
                margin-bottom: 40px;
               
        }

        padding: 8px;

        ${Button} {

                width: 100%;
                text-align: center;
                text-decoration: none;
                display: inline-block;
        }

        
`

export const Content = styled.div`

        p {
                font-weight: 400;
                line-height: 22px;
        }
      
        p, span {
                font-size: 14px;
        }

        span {
                margin: 16px 0;
                display: block;
        }

        h2 {
                font-weight: 900;
                font-size: 18px;
                margin-bottom: 16px;
        }


        ${Button} {
                position: relative;
                margin: 0 auto;
        }

`

export const TitleCont = styled.div`

        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        font-weight: bold;
        font-size: 18px;

`
export const ModalCont = styled.div`
        z-index: 1;
        width: 1024px;
        padding: 32px;
        display: flex;
        color: ${colors.white};
        background-color: ${colors.rDark};
        gap: 24px;

        > div {
                img {
                        width: 280px;
                        height: 280px;

                }
        }

`

export const Modal = styled.div`

        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        display: none;
        align-items: center;
        justify-content: center;
        content: '';
        
        &.visible {

                display: flex;
        }

        .overlay {

                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.70);
        }


`


export const ImgCloseButton = styled.img`

        width: 16px;
        height: 16px;

        &:hover {
                cursor: pointer;
        }

`