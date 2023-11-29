import Footer from '../../components/Footer/Index'

import { useParams } from 'react-router-dom'

import HeaderProducts from '../../components/HeaderProducts/Index'
import Banner from '../../components/Banner/Index'
import FoodCartList from '../../components/FoodCartList/Index'

import { FoodItems } from '../Home/Index'
import { useEffect, useState } from 'react'



const Products = () => {

    const { id } = useParams()
    const [menu, setMenu] = useState<FoodItems>()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setMenu(res))

    }, [id])

    if (!menu) {

        return <h3>Carregando...</h3>
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
            </>
 
    )
}

export default Products