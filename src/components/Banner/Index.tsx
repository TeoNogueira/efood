import {Container, DeepCont, TextBanner} from './styles'

const Banner = () => {

    return(
        <Container>
            <DeepCont className="container">
                <span>Italiana</span>
                <TextBanner>La Dolce Vita Trattoria</TextBanner>
            </DeepCont>
        </Container>
    )
}

export default Banner