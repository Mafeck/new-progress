import { Container, Img } from "./style"; 

const Card = ({type = false, title, category}) => {

    return (
        <Container>
            <Img className='imgBox'></Img>
            <div>
                <h4>{title} title</h4>
                <span>{category} cat</span>
            </div>
        </Container>
    )

}

export default Card;