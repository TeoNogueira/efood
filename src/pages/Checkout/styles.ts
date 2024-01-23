import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'


import trash from '../../assets/images/trash.png'

type PropsMargin = {

    marginTop?: string
}

export const CartContainer = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display:none;
    justify-content: flex-end;

    &.is-open {
        display: flex;
    }

`
export const SideBar = styled.aside`

    width: 100%;
    background-color: ${colors.rDark};
    max-width: 360px;
    z-index: 1;
    padding: 32px 8px 0;
   

         
    @media (max-width: ${breakpoints.desktop}) {
            max-width: 300px;
    }

`
export const PriceCont = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 40px 0 16px;
    color: ${colors.rLight};
    font-weight: bold;
    font-size: 14px;

    
   

`
export const CartItem = styled.li`

display: flex;
background-color: ${colors.rLight};
padding: 8px;
margin-bottom: 16px;
position: relative;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin: 0 8px 0 0;

    }

    button {

        width: 16px;
        height: 16px;
        background-image: url(${trash});
        border: none;
        background-color: transparent;
        position: absolute;
        bottom: 8px;
        right: 8px;
        cursor: pointer;
    }

    h3 {
        font-size: 16px;
        font-weight: 900;
        margin: 0 0 16px 0;
    }

    span {
        font-size: 14px;
    }

`

export const ItemContent = styled.div`

    display: block;
  
    ::-webkit-scrollbar {
        width: 5px;
      }

      ::-webkit-scrollbar-thumb {
        background: #d3d3d2;
      }
    ul {
      
        max-height: 500px;
        overflow-y: auto;
        margin-bottom: -22px;
       
    }

    &.is-visible {
        display: none;
    }

    @media (max-width: ${breakpoints.tablet}) {
         
    ul {
      
        max-height: 400px;
        overflow-y: auto;
        margin-bottom: -22px;
    }

}


`
export const TextOrder = styled.p`
    span {
        font-size: 14px;
        display: block;
        padding: 12px; 0;
        line-height: 22px;
    }

`

export const Button = styled.button<PropsMargin>`

    width: 100%;
    padding: 4px;
    font-weight: bold;
    background-color: ${colors.rLight};
    color: ${colors.rDark};
    border: none;
    cursor: pointer;
    margin-top: ${(props) => (props.marginTop ? '24px' : '')};

`
export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 28px;

`

export const FormContainer = styled.div`

    color: ${colors.white};

    label {
        font-weight: bold;
        font-size: 14px;
    }


    label,
    input {
        display: block;
        width: 100%;
        max-width: 100%;

        &.error {
            border: 2px; solid red;

        }
    }

    input {

        margin: 8px 0;
        padding: left: 8px;
        height: 32px;
        border: 1px solid ${colors.rDark};

        &.cvv {
            width: 87px;
            max-width: 100%;
        }
        &.cardNum {
            width: 228px;
            max-width: 100%;
        }
    }

    > div {
        display: flex;
        justify-content: space-between;
    }

    button {
        margin-bottom: 8px;

    }

    &.is-visible {
        display: none;
    }

    h2 {
        font-weight: bold;
        margin-bottom: 16px;
        font-size: 16px;
    }
    
`

export const Overlay = styled.div`
    
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000;
opacity: 0.7;

`