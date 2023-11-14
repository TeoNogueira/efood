import { TagCont } from './styles'

type Props = {
    children: string
}

const Tag = ({ children }: Props) => {
    return <TagCont>{children}</TagCont> 
}

export default Tag