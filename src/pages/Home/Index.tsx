import HeaderInit from '../../components/HeaderInit/Index'

import FoodList from '../../components/FoodList/Index'
import Footer from '../../components/Footer/Index'

import { useGetRestaurantsQuery } from '../../services/api'

export interface MenuItems {
    id: number
    foto: string
    nome: string
    descricao: string
    preco: number
    porcao: string

}

export type FoodInfos = {

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

    const { data: FoodItems } = useGetRestaurantsQuery()

    if (FoodItems) {
 
     return (
         <>
         <HeaderInit />
         <FoodList foodClass={FoodItems}/>
         <Footer />
         </>
     )
 
    }
 
    return <h4>carregando...</h4>
}

export default Home