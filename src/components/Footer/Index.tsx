import {Container, TextSmall, List, Anchor, LinkLogo} from './styles'
import Logo from '../../assets/images/logo.png'

import Instagram from '../../assets/images/icones/instagram.png'
import Facebook from '../../assets/images/icones/facebook.png'
import Twitter from '../../assets/images/icones/twitter.png'

const Footer = () => {

    return(
        <Container>
            <div className="container">
                <LinkLogo to={'/'}>
                    <img src={Logo} alt="logo" />
                </LinkLogo>
                <List>
                    <li>
                        <Anchor href="">
                            <img src={Instagram} alt="Instagram" />
                        </Anchor>
                    </li>
                    <li>
                        <Anchor href="">
                            <img src={Facebook} alt="Facebook" />
                        </Anchor>
                    </li>
                    <li>
                        <Anchor href="">
                            <img src={Twitter} alt="Twitter" />
                        </Anchor>
                    </li>
                </List>
                <TextSmall>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
                </TextSmall>
            </div>
        </Container>
    )
}

export default Footer