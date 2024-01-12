import HeaderInit from '../../components/HeaderInit/Index'

import FoodList from '../../components/FoodList/Index'
import Footer from '../../components/Footer/Index'

import { useGetRestaurantsQuery } from '../../services/api'



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