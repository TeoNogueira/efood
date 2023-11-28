import {Container, List} from './styles'

// import Efood from '../../models/Efood'
import FoodInit from '../FoodInit/Index'
import { FoodItems } from '../../pages/Home/Index'


type Props = {
    foodClass: FoodItems[]
}

const FoodList= ({ foodClass }: Props) => {
    const getTags = (efood: FoodItems) => {

        const tags = []

        if (efood.destacado) {
            tags.push('Destaque dessa semana')
        }

        if (efood.tipo) {

            tags.push(efood.tipo)
        }


        return tags
    }


    return (
        <Container className="container">
            <List>
                {foodClass.map((efood) => (
                <li key={efood.id}>
              <FoodInit
                infosTag={getTags(efood)}
                image={efood.capa}
                description={efood.descricao}
                title={efood.titulo}
                rank={efood.avaliacao}
                id={efood.id}

                /> 

                </li>                            
                ))}
            </List>
        </Container>
    )
}


export default FoodList 