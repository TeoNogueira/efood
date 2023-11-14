class Efood {

    id: number
    title: string
    infosTag: string[]
    image: string
    description: string
    rank: number

    constructor(
        id: number,
        infosTag: string[],
        image: string,
        description: string,
        title: string,
        rank: number,
    )
    {
        this.id = id
        this.infosTag = infosTag
        this.image = image
        this.description = description
        this.title = title
        this.rank = rank
    }
}

export default Efood