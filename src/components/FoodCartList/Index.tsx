import { useState } from 'react'

import buttonClose from '../../assets/images/close.png'

import { MenuItems } from '../../pages/Home/Index'


import {
        Container,
        Content,
        TitleCont,
        ModalCont,
        Modal,
        Button,
        InfoCont,
        ImgCloseButton,

    
    } from './styles'

interface modalBoolean extends MenuItems {

        isVisible: boolean
    }

type Props = {

    items: MenuItems[]
}

const FoodCartList = ({ items }: Props) => {

    const [modal, setModal] = useState<modalBoolean>({

        isVisible: false,
        descricao: '',
        foto: '',
        id: 0,
        nome: '',
        porcao: '',
        preco: 0,

    })

    const controllerDesc = (descricao: string) => {

            if( descricao.length > 100) {

                return descricao.slice(0, 97)  + '...'
            }

            return descricao
    }

    const formatBRL = (preco = 0) => {

        return new Intl.NumberFormat('pt-BR', {

            style: 'currency',
            currency: 'BRL',
        }).format(preco)
    }

    const closeModal = () => {

        setModal({

            isVisible: false,
            descricao: '',
            foto: '',
            id: 0,
            nome: '',
            porcao: '',
            preco: 0
        })
    }

    return (
        <>
        <Container className="container">
                {items.map((fc) => (  

                <li key={fc.id}>
                   <img src={fc.foto} />
                   <InfoCont>
                    <TitleCont>
                        <h3>{fc.nome}</h3>
                    </TitleCont>
                    <p>{controllerDesc(fc.descricao)}</p>
                    <Button
                        onClick={() => {
                            setModal({

                                isVisible: true,
                                descricao: fc.descricao,
                                foto: fc.foto,
                                id: fc.id,
                                nome: fc.nome,
                                porcao: fc.porcao,
                                preco: fc.preco,

                            })

                        }}
                        >
                            Adicionar ao carrinho
                        </Button>
                    </InfoCont>       
            
                </li>
                ))}


        </Container>
                <Modal className={modal.isVisible ? 'visible' : ''}>
                        <ModalCont className="container">
                            <div>
                                <img src={modal.foto} alt="image" onClick={closeModal} />
                            </div>

                            <Content>
                                <h2>{modal.nome}</h2>   
                                <p>{modal.descricao}</p>
                                <span>Serve {modal.porcao}</span>
                                <Button>
                                    Adicionar ao carrinho - {formatBRL(modal.preco)}
                                </Button>

                            </Content>

                                 <ImgCloseButton 

                                         src={buttonClose}
                                            alt="Close Button"
                                                onClick={closeModal}

                                             />
                        </ModalCont>
                        <div className="overlay" onClick={closeModal}></div>
                </Modal>

        </>
    )
}


export default FoodCartList