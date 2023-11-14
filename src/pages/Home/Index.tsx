import Efood from '../../models/Efood'
import HeaderInit from '../../components/HeaderInit/Index'

import FoodList from '../../components/FoodList/Index'
import Footer from '../../components/Footer/Index'

import Sushi from '../../assets/images/sushi.png'
import Spaghetti from '../../assets/images/macarrao.png'


const foods: Efood[] = [

{
    id: 1,
    infosTag: ['Destaque da semana', 'Japonesa'],
    image: `${Sushi}`,
    description:
     'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    rank: 4.9,
},
{
    id: 2,
    infosTag: ['Italiana'],
    image: `${Spaghetti}`,
    title: 'La Dolce Vita Trattoria',
    rank: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
},
{
    id: 3,
    infosTag: ['Italiana'],
    image: `${Spaghetti}`,
    title: 'La Dolce Vita Trattoria',
    rank: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
},
{
    id: 4,
    infosTag: ['Italiana'],
    image: `${Spaghetti}`,
    title: 'La Dolce Vita Trattoria',
    rank: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
},
{
    id: 5,
    infosTag: ['Italiana'],
    image: `${Spaghetti}`,
    title: 'La Dolce Vita Trattoria',
    rank: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
},
{
    id: 6,
    infosTag: ['Italiana'],
    image: `${Spaghetti}`,
    title: 'La Dolce Vita Trattoria',
    rank: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
}
]

const Home = () => {
return(

    <>
    <HeaderInit />
    <FoodList  foodClass={foods}/>
    <Footer />
    </>
 )
}

export default Home