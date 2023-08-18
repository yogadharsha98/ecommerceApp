import React, { useEffect } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import NavBarPanel from "./NavBarPanel";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products,status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if(status === StatusCode.LOADING){
    return <p>Loading...</p>
  }
  if(status === StatusCode.ERROR){
    return <Alert key='danger' variant="danger">Something went wrong! Try again later</Alert>
  }
  

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3" key={product.id} style={{ marginBottom: "10px" }}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>

        <Card.Body>
          <Card.Title style={{ fontSize: "14px" }}>{product.title}</Card.Title>
          <Card.Text>LKR {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <NavBarPanel />

      <div className="row" style={{ marginTop: "30px" }}>
        {cards}
      </div>
    </>
  );
};

export default Product;
