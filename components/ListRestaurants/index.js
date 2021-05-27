import Restaurant from './Restaurant';
import { Row, Col } from 'react-bootstrap';
import getRestaurants from '../../services/getRestaurants';

export default function ListRestaurants() {
  const { restaurants, isLoading, isError } = getRestaurants();
  if (!restaurants)
    return null;


  return(
    <div className='mt-5'>
      <h3 className='fw-bold'>Restaurantes</h3>
      <Row>
        <Col>
          {
            restaurants.map((restaurant, i) => {
              <Restaurant {...restaurant} key={i}/>
            }
          )}
        </Col>
      </Row>
    </div>
  )
}
