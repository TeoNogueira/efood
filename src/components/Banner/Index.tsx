import { FoodInfos } from '../../pages/Home/Index'
import {Container, DeepCont, TextBanner} from './styles'

type Props = {

    bannerEfood: FoodInfos
}


const Banner = ({ bannerEfood }: Props) => {

    return(
        <Container style={{backgroundImage: `url(${bannerEfood.capa})` }}>
            <DeepCont className="container">
                <span>{bannerEfood.tipo}</span>
                <TextBanner>{bannerEfood.titulo}</TextBanner>
            </DeepCont>
        </Container>
    )
}

export default Banner