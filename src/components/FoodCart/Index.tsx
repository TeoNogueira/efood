import ButtonAddCart from '../ButtonAddCart/Index'

import {
    Container,
      SubCont,
       TitleCont,
     } from './styles'

type Props = {
    image: string
    title: string
    description: string
    id: number

}


const FoodCart = ({ image, title, description, id}: Props) => {

    return(
        <Container key={id}>
            <img src={image} />
            <SubCont>
                <TitleCont>
                    <h3>{title}</h3>
                </TitleCont>
                <p>{description}</p>
                <ButtonAddCart>Adicionar ao carrinho</ButtonAddCart>
            </SubCont>
        </Container>
    )
}


export default FoodCart