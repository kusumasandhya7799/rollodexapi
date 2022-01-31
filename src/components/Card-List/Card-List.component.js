import Card from '../Card/Card.component'
import './Card-List.styles.css'
import {Container,Row,Col} from 'react-bootstrap'

const CardList = (props)  => {
    
    const {monsters} = props
   return(
       <Container fluid="md">
      <div class="row">
       <div className='card-list'>
            {
                monsters.map(
                    (monster,index) => (
                        
                        //<div class="col-sm-6">
                        <Card key={index} monster={monster} />
                       // </div>
                    )
                )
            }
       </div>
       </div>
       </Container>
   )
}

export default CardList