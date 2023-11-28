import HeaderInit from '../../components/HeaderInit/Index'

import FoodList from '../../components/FoodList/Index'
import Footer from '../../components/Footer/Index'

import { useEffect, useState } from 'react'


export interface MenuItems {
    id: number
    foto: string
    nome: string
    descricao: string
    preco: number
    porcao: string

}


export type FoodItems = {

    id: number
    titulo: string
    destacado: boolean
    capa: string
    tipo: string
    avaliacao: number
    descricao: string
    cardapio: MenuItems[]
}

const Home = () => {

    const [foodItems, setFoodItems] = useState<FoodItems[]>([])

    useEffect(() =>
    {   
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((res) => setFoodItems(res))

    }, [])

return(

    <>
    <HeaderInit />
    <FoodList foodClass={foodItems} />
    <Footer />
    </>
 )
}

export default Home