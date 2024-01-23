import { useDispatch, useSelector } from "react-redux"
import { usePurchaseMutation } from "../../services/api"
import { useEffect, useState } from "react"

import InputMask from 'react-input-mask'

import * as S from './styles'

import { close, remove, clearCart} from '../../store/reducers/cart'
import { useFormik } from "formik"

import * as Yup from 'yup'
import { formatBRL } from "../../components/FoodCartList/Index"
import { RootReducer } from "../../store"
import { useNavigate } from "react-router-dom"

const Checkout = () => {

        const dispatch = useDispatch()
        const navigate = useNavigate()

        const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

        const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()

        const [continueToPay, setContinueToPay] = useState(false)

        const [compraValida, setCompraValida] = useState(false)

        const apenasLetras = (value: string) => {

            const recebeRegex = value.replace(/[^a-zA-Z\s']/g, '')

            if(value !== recebeRegex) {

                alert('Por favor, digite apenas letras no campo')
            }
            return recebeRegex
        }
        const apenasNumeros = (value: string) => {

            const recebeRegex = value.replace(/\D/g, '')

            if(value !== recebeRegex) {

                alert('Por favor, digite apenas Números no campo')
            }
            return recebeRegex
        }

    


        const closeCart = () => {
            dispatch(close())
        }

        const removeItemCart = (id: number) => {

            dispatch(remove(id))
        }

        const getTotalPrice = () => {

            return items.reduce((acc, valorAtual) => {

                return (acc += valorAtual.preco)
            }, 0)
        }

        const completedPurchase = () => {

            navigate('/')
            dispatch(close())
        }

        const validaCompra = () => {

            if (items.length < 1) {

                alert('Seu carrinho está vazio')
                dispatch(close())
                setCompraValida(false)
            } else if (items.length > 0) {

                setCompraValida(true)
            }

        }

        const form = useFormik({
               initialValues: {
                receiver: '',
                address: '',
                city: '',
                cep: '',
                numberAddress: '',
                complement: '',
                cardName: '',
                cardNumber: '',
                cvv: '',
                expiresMonth: '',
                expiresYear: ''
            },
        validationSchema: Yup.object({
        receiver: Yup.string()
        .min(4, 'O campo precisa ter no minimo 4 caracteres')
        .required('O campo é obrigatório'),
        address: Yup.string()
        .min(5, 'O campo precisa ter no minimo 5 caracteres')
        .required('O campo é obrigatório'),
        city: Yup.string()
        .min(3, 'O campo precisa ter no minimo 3 caracteres')
        .required('O campo é obrigatório'),
        cep: Yup.string()
        .min(9, 'O campo precisa ter no minimo 9 caracteres')
        .max(9, 'O campo precisa ter no maximo 9 caracteres')
        .required('O campo é obrigatório'),
        numberAddress: Yup.string().matches(/^\d+$/, 'Por favor, digite um endereço válido').required('O campo é obrigatório'),
        cardName: Yup.string().required('O campo é obrigatório'),
        cardNumber: Yup.string().required('O campo é obrigatório'),
        cvv: Yup.string()
        .min(3, 'O campo precisa ter no minimo 3 caracteres')
        .max(3, 'O campo precisa ter no minimo 3 caracteres')
        .required('O campo é obrigatório'),
        expiresMonth: Yup.string().required('O campo é obrigatório'),
        expiresYear: Yup.string().required('O campo é obrigatório'),
        complement: Yup.string().min( 1,
            'O campo precisa ter 1 caractere no mínimo'
            
            )
        }),
            onSubmit: (values) => {
                  purchase({
                    delivery: {
                        receiver: values.receiver,
                        address: {
                            description: values.address,
                            city: values.city,
                            zipCode: values.cep,
                            number: Number(values.numberAddress),
                            complement: values.complement
                        }
                    },
                    payment: {
                        card: {
                            name: values.cardName,
                            number: values.cardNumber,
                            code: Number(values.cvv),
                            expires: {
                                month: Number(values.expiresMonth),
                                year: Number(values.expiresYear)
                            }
                        }
                    },
                    products: items.map((item) => ({
                        id: item.id,
                        price: item.preco
                    }))
            })

        }

    })

    const checkInputHasError = (fieldName: string) => {

        const isInvalid = fieldName in form.errors
        const isChange = fieldName in form.touched

        const hasError = isChange && isInvalid

        return hasError
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(clearCart())
        }
}, [dispatch, isSuccess])

    return (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />

            <S.SideBar>
                {isSuccess && data ? (
                    <S.FormContainer>
                        <h2>Pedido realizado - { data.orderId}</h2>
                        <S.TextOrder>
                            <span>
                            Estamos felizes em informar que seu pedido já está em processo
                            de preparação e, em breve, será entregue no endereço fornecido.
                            </span>
                            
                            <span>
                            Gostaríamos de ressaltar que nossos entregadores não estão
                            autorizados a realizar cobranças extras.
                            </span>
                            <span>
                            Lembre-se da importância de higienizar as mãos após o
                            recebimento do pedido, garantindo assim sua segurança e
                            bem-estar durante a refeição.
                            </span>
                            <span>
                            Esperamos que desfrute de uma deliciosa e agradável
                            gastronômica. Bom apetite!
                            </span>
                        </S.TextOrder>
                        <S.Button onClick={completedPurchase}>Concluir</S.Button>
                    </S.FormContainer>
                ) : (
                    <>
                    <S.ItemContent className={compraValida ? 'is-visible' : ''}>
                        {items.length > 0 ? (
                     <>
                        <ul>
                            {items.map((item) => (
                                <S.CartItem key={item.id}>
                                    <img src={item.foto} alt="" />
                                    <div>
                                        <h3>{item.nome}</h3>
                                        <span>{formatBRL(item.preco)}</span>
                                    </div>
                                    <button onClick={() => removeItemCart(item.id)} />
                                </S.CartItem>

                            ))}
                        </ul>
                        <S.PriceCont>
                            <h4>Valor total</h4>
                            <span>{formatBRL(getTotalPrice())}</span>
                        </S.PriceCont>
                        <S.Button type="button" onClick={validaCompra}>
                            Continuar com a entrega
                        </S.Button>
                        </>
                          ) : ( <p className="empty-text">
                                 O carrinho está vazio, adicione pelo menos um produto para
                                 continuar com a compra
                          </p>
                        )}
                    </S.ItemContent>

                      
                    <form onSubmit={form.handleSubmit}>

                        {compraValida && (
                                
                                <S.FormContainer className={continueToPay ? 'is-visible' : ''} >
                                    <h2>Entrega</h2>
                                    <label htmlFor="receiver">Quem irá receber</label>
                                    <input
                                     type="text"
                                     id="receiver"
                                     name="receiver"
                                     value={apenasLetras(form.values.receiver)}
                                     onChange={(e) => {
                                       
                                        form.setFieldValue('receiver', apenasLetras(e.target.value) )

                                     }}
                                     onBlur={form.handleBlur}
                                     className={checkInputHasError('receiver') ? 'error' : ''}
                                    />
                                    <label htmlFor="address">Endereço</label>
                                    <input
                                     type="text"
                                     id="address"
                                     name="address"
                                     value={form.values.address}
                                     onChange={(e) => form.setFieldValue('address', apenasLetras(e.target.value))}
                                     onBlur={form.handleBlur}
                                     className={checkInputHasError('address') ? 'error' : ''}
                                    />
                                    <label htmlFor="city">Cidade</label>
                                    <input
                                     type="text"
                                     id="city"
                                     name="city"
                                     value={form.values.city}
                                     onChange={(e) => form.setFieldValue('city', apenasLetras(e.target.value))}
                                     onBlur={form.handleBlur}
                                     className={checkInputHasError('city') ? 'error' : ''}
                                    />
                                    <div>
                                        <div>
                                    <label htmlFor="cep">CEP</label>
                                    <InputMask
                                    mask="99999-999"
                                     type="text"
                                     id="cep"
                                     name="cep"
                                     value={form.values.cep}
                                     onChange={(e) => form.setFieldValue('cep', e.target.value)}
                                     onBlur={form.handleBlur}
                                     className={checkInputHasError('cep') ? 'error' : ''}
                                    />
                                        </div>
                                        <div>
                                        <label htmlFor="numberAddress">Número</label>
                                    <input
                                     type="text"
                                     id="numberAddress"
                                     name="numberAddress"
                                     value={form.values.numberAddress}
                                     onChange={(e) => form.setFieldValue('numberAddress', apenasNumeros(e.target.value))}
                                     onBlur={form.handleBlur}
                                     className={checkInputHasError('numberAddress') ? 'error' : ''}
                                    />
                                        </div>
                                    </div>
                                    <label htmlFor="complement">Complemento (opcional)</label>
                                    <input
                                     type="text"
                                     id="complement"
                                     name="complement"
                                     value={form.values.complement}
                                     onChange={(e) => form.setFieldValue('complement', e.target.value)}
                                     onBlur={form.handleBlur}
                                     className={checkInputHasError('complement') ? 'error' : ''}
                                    />
                                    <S.Button
                                    type="button"
                                    onClick={() => {
                                            const enderecoPreenchido = 
                                            form.values.receiver &&
                                            form.values.address &&
                                            form.values.city &&
                                            form.values.cep &&
                                            form.values.numberAddress
                                            if(!enderecoPreenchido) {
                                                alert('Por favor, preencha todos os campos para continuar seu pedido!')
                                                return
                                            } 

                                            setContinueToPay(true)

                                    }}
                                    marginTop="24px"
                                    >
                                        Continuar com o pagamento
                                    </S.Button>
                                    <S.Button
                                    type="button"
                                    onClick={() => setCompraValida(false)}
                                    >
                                        Voltar para o carrinho
                                    </S.Button>
                                </S.FormContainer>
                        )}

                        {continueToPay && (
                            <S.FormContainer className={isSuccess ? 'is-visible' : ''}>
                                <h2>
                                    Pagamento - Valor a pagar { formatBRL(getTotalPrice())}
                                </h2>
                                <label htmlFor="cardName">Nome do cartão</label>
                                    <input
                                     type="text"
                                     id="cardName"
                                     name="cardName"
                                     value={form.values.cardName}
                                     onChange={(e) => form.setFieldValue('cardName', apenasLetras(e.target.value))}
                                     onBlur={form.handleBlur}
                                     className={checkInputHasError('cardName') ? 'error' : ''}
                                    />
                                    <div>
                                        <div>
                                        <label htmlFor="cardNumber">Número do cartão</label>
                                    <InputMask
                                     mask="9999 9999 9999 9999"
                                     type="text"
                                     id="cardNumber"
                                     name="cardNumber"
                                     value={form.values.cardNumber}
                                     onChange={(e) => form.setFieldValue('cardNumber', e.target.value)}
                                     onBlur={form.handleBlur}
                                     className={checkInputHasError('cardNumber') ? 'error cardNum' : 'cardNum'}
                                    />
                                        </div>
                                        <div>
                                        <label htmlFor="cvv">CVV</label>
                                    <InputMask
                                     mask="999"
                                     type="text"
                                     id="cvv"
                                     name="cvv"
                                     value={form.values.cvv}
                                     onChange={(e) => form.setFieldValue('cvv', e.target.value)}
                                     onBlur={form.handleBlur}
                                     className={checkInputHasError('cvv') ? 'error cvv' : 'cvv'}
                                    />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                                    <InputMask
                                    mask="99"
                                     type="text"
                                     min="01"
                                     max="12"
                                     id="expiresMonth"
                                     name="expiresMonth"
                                     value={form.values.expiresMonth}
                                     onChange={(e) => form.setFieldValue('expiresMonth', e.target.value)}
                                     onBlur={form.handleBlur}
                                     className={checkInputHasError('expiresMonth') ? 'error' : ''}
                                    />
                                        </div>
                                        <div>
                                        <label htmlFor="expiresYear">Ano de vencimento</label>
                                    <InputMask
                                    mask="99"
                                     type="text"
                                     id="expiresYear"
                                     name="expiresYear"
                                     value={form.values.expiresYear}
                                     onChange={(e) => form.setFieldValue('expiresYear', e.target.value)}
                                     onBlur={form.handleBlur}
                                     className={checkInputHasError('expiresYear') ? 'error' : ''}
                                    />
                                        </div>
                                    </div>
                                    <S.Button type="submit" onClick={() => {
                                            const enderecoPreenchido = 
                                            form.values.cardName &&
                                            form.values.cardNumber &&
                                            form.values.cvv &&
                                            form.values.expiresMonth &&
                                            form.values.expiresYear
                                            if(!enderecoPreenchido) {
                                                alert('Por favor, preencha todos os campos para continuar seu pedido!')
                                                return
                                            } 

                                            setContinueToPay(true)

                                    }}marginTop="24px" >
                                     {isLoading
                                     ? 'Finalizando Pagamento...'
                                     : 'Finalizar Pagamento'
                                     }
                                    </S.Button>
                                    <S.Button type="button" onClick={() => setContinueToPay(false)}>
                                        Voltar para a edição de endereço
                                    </S.Button>
                            </S.FormContainer>
                        )}
                    </form>
                    </>
                )}
            </S.SideBar>
            </S.CartContainer>
    )
}

export default Checkout
