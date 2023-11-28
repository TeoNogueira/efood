import {Container, Content} from './styles'
import FoodInit from '../FoodCart/Index'
import Cart from '../../models/Cart'

type Props = {

    foodCartArray: Cart[]
}

const FoodCartList = ({ foodCartArray}: Props) => {

    return(

        <Container className="container">
            <Content>
                {foodCartArray.map((foodCart) => ( 
                <FoodInit
                             
                    key={foodCart.id}
                    image={foodCart.image}
                    title={foodCart.title}
                    description={foodCart.description}
                    id={foodCart.id}
                />
                ))}

            </Content>

        </Container>

    )
}


export default FoodCartList