import { Container } from "./style"; 


const Card = ({type = false, title, category}) => {

    return (
            <Container type={type}>
                <div className='imgBox'></div>
                <div>
                    <h4>{title} title</h4>
                    <span>{category} cat</span>
                </div>
            </Container>
    )

}

export default Card;