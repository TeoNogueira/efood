import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

import { formatBRL } from '../FoodCartList/Index'
import { CartContainer, PriceCont, SideBar, CartItem, Button, Overlay } from './styles'



const Cart = () => {
    
    const dispatch = useDispatch()

    const { isOpen, items} = useSelector((state: RootReducer) => state.cart)


        const removeItem = (id: number) => {
            dispatch(remove(id))

        }

        const closeCart = () => {

            dispatch(close())
        }

        const getTotalPrice = () => {

            return items.reduce((acc, actualValor) => {
                    return ( acc += actualValor.preco)
            }, 0)
        
}

    return (

        <CartContainer className={ isOpen ? 'is-open' : ''}>

            <Overlay onClick={closeCart}></Overlay>
            <SideBar>
                <ul>
                    {items.map((item) => (

                        <CartItem key={item.id}>
                            <img src={item.foto} alt="" />
                            <div>
                                <h3>{item.nome}</h3>
                                <span>{formatBRL(item.preco)}</span>
                            </div>
                            <button onClick={() => removeItem(item.id)} />

                        </CartItem>
                    ))}

                </ul>
                <PriceCont>
                      <h4>Valor total</h4>
                    <span>{formatBRL(getTotalPrice())}</span>
                </PriceCont>
                <Button>Continuar com a entrega</Button>
            </SideBar>


        </CartContainer>
    )

}


export default Cart