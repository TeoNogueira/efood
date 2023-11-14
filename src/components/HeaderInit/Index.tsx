import { Container, TextHeader } from './styles'

import logo from '../../assets/images/logo.png';

const HeaderInit = () => {

    return (
        <Container>
        <div className="container">
            <img src={logo} alt="EFOOD LOGO" />
            <TextHeader>
            Viva experiências gastronômicas no conforto da sua casa
            </TextHeader>
        </div>
        </Container>
    )
}

export default HeaderInit