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
            <Banner />
            <FoodCartList foodCartArray={setMenu}/>
            <Footer />
            </>
 
    )
}

export default Products