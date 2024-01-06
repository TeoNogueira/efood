import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'


import trash from '../../assets/images/trash.png'


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
export const Button = styled.button`

    width: 100%;
    padding: 4px;
    font-weight: bold;
    background-color: ${colors.rLight};
    color: ${colors.rDark};
    border: none;
    cursor: pointer;


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