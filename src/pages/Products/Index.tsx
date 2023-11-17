import Footer from '../../components/Footer/Index'

// import Sushi from '../../assets/images/sushi.png'
// import Spaghetti from '../../assets/images/macarrao.png'
import Pizza from '../../assets/images/pizza.png'


import Cart from '../../models/Cart'
import HeaderProducts from '../../components/HeaderProducts/Index'
import Banner from '../../components/Banner/Index'
import FoodCartList from '../../components/FoodCartList/Index'

const itemsCart: Cart[] = [
    {
        id: 1,
        image: `${Pizza}`,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 2,
        image: `${Pizza}`,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 3,
        image: `${Pizza}`,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 4,
        image: `${Pizza}`,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 5,
        image: `${Pizza}`,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
        id: 6,
        image: `${Pizza}`,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },


]

const Products = () => {

    return(

            <>
            <HeaderProducts />
            <Banner />
            <FoodCartList foodCartArray={itemsCart}/>
            <Footer />
            </>
 
    )
}

export default Products