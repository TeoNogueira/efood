import Link from '../Link/Index'
import Tag from '../Tag/Index'


import { 
    Container,
    InfoContainer,
    TagContent,
    TitleContent,
    RankContainer
   } from './styles'

   import ImgStar from '../../assets/images/icones/star.png'

type Props = {
    id: number
    infosTag: string[]
    image: string
    description: string
    title: string
    rank: number
}

const FoodInit = ({
    id,
    infosTag,
    image,
    description,
    title,
    rank
}: Props) => {
    return(
        <Container>
            <img src={image} />
            <TagContent>
                {infosTag.map((tg) => (
                    <Tag key={id}>{tg}</Tag>
                ))}
            </TagContent>
            <InfoContainer>
                <TitleContent>
                    <h3>{title}</h3>
                    <RankContainer>
                        <h4>{rank}</h4>
                        <img src={ImgStar} alt="IconStar" />
                    </RankContainer>
                </TitleContent>
                <p>{description}</p>
                <Link />
            </InfoContainer>
        </Container>
    )

}


export default FoodInit