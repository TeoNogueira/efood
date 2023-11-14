import {Container, List} from './styles'

import Efood from '../../models/Efood'
import FoodInit from '../FoodInit/Index'

type Props = {
    foodClass: Efood[]
}

const FoodList= ({ foodClass }: Props) => {

    return (
        <Container className="container">
            <List>
                {foodClass.map((efood) => (
                <FoodInit
                key={efood.id}
                infosTag={efood.infosTag}
                image={efood.image}
                description={efood.description}
                title={efood.title}
                rank={efood.rank}
                id={efood.id}
                />                             
                ))}
            </List>
        </Container>
    )
}


export default FoodList 