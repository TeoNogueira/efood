import { useDispatch, useSelector} from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import {Container, DeepCont, LinkLogo, LinkHeader, CartButton, LinkHome } from './styles'

import logo from '../../assets/images/logo.png'


const HeaderProducts = () => {

    const dispatch = useDispatch()

    const {items} = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

    return (
        <Container>
            <DeepCont className="container">
                <LinkHome to={'/'} >
                <LinkHeader>Restaurantes</LinkHeader>
                </LinkHome>
                
                <LinkLogo to={'/'}>
                    <img src={logo} alt="Logo" />
                </LinkLogo>
                <CartButton onClick={openCart}>
                {items.length} produto(s) no carrinho
                </CartButton>
            </DeepCont>
        </Container>
    )
}


export default HeaderProducts