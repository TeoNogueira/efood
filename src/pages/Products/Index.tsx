import Footer from '../../components/Footer/Index'
import { useGetRestaurantsIdQuery } from '../../services/api'



import { useParams } from 'react-router-dom'

import HeaderProducts from '../../components/HeaderProducts/Index'
import Banner from '../../components/Banner/Index'
import FoodCartList from '../../components/FoodCartList/Index'
import Checkout from '../Checkout/Index'

// import { FoodInfos } from '../Home/Index'


const Products = () => {

    const { id } = useParams()

    const { data: menu } = useGetRestaurantsIdQuery(id!)

    if (!menu) {

        return <h4>Carregando...</h4>
    }

    return (

            <>
            <HeaderProducts />
            <Banner 
            bannerEfood={{
                
                id: menu.id,
                titulo: menu.titulo,
                destacado: menu.destacado,
                capa: menu.capa,
                tipo: menu.tipo,
                avaliacao: menu.avaliacao,
                descricao: menu.descricao,
                cardapio: []

            }}
            
            />
            <FoodCartList items={menu.cardapio} />
            <Footer />
            <Checkout />
            </>
 
    )
}

export default Products