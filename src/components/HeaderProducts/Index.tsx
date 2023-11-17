
import {Container, DeepCont, LinkLogo, LinkHeader} from './styles'

import logo from '../../assets/images/logo.png'

const HeaderProducts = () => {

    return (
        <Container>
            <DeepCont className="container">
                <LinkHeader>Restaurantes</LinkHeader>
                <LinkLogo to={'/'}>
                    <img src={logo} alt="Logo" />
                </LinkLogo>
                <span>0 produto(s) no carrinho</span>
            </DeepCont>
        </Container>
    )
}


export default HeaderProducts