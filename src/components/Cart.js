import React from 'react'
import NavBarPanel from './NavBarPanel'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const removeToCart =(id)=>{
    dispatch(remove(id))

  }
  const cards = products.map((product) => (
    <div className="col-md-12" key={product.id} style={{marginBottom: '10px'}}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>

        <Card.Body>
          <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
          <Card.Text>
            LKR {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{background:'white'}}>
        <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <NavBarPanel />
      <div className='row'>
        {cards}
      </div>
    
    </>
    
  )
}

export default Cart