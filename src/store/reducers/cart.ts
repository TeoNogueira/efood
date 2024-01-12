import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {

    items: MenuItems[]
    isOpen: boolean
}

const initialState: CartState = {

    items: [],
    isOpen: false
}


const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<MenuItems>) => {
            const itemInCart = state.items.find(
                (item) => item.id === action.payload.id
            )

            if(!itemInCart) {
                state.items.push(action.payload)
            } else {
                alert('Já temos esse item no seu carrinho adicionado')
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },

        open: (state) => {
            state.isOpen = true
        },

        close: (state) => {
            state.isOpen = false
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const {add, remove, close, open, clearCart } = cartSlice.actions

export default cartSlice.reducer