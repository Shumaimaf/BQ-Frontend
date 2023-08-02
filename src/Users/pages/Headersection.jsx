import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSell } from 'react-icons/md';

export default function HeaderSection() {
  return (
    <Container className="container mb-5">
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-center">
            <Image
              style={{ marginTop :"0px", paddingTop:"0px" , width: '200px', height: '200px', objectFit: 'cover', border: '1px solid black', borderRadius: '50%' }}
              src="https://img.freepik.com/premium-vector/basket-clothes-purchase-deliveryonline-shopping-concept_183665-544.jpg"
              roundedCircle
            />
            <p className="text-center mt-2" style={{ fontFamily: "'Playfair', serif", textTransform: "capitalize", marginBottom: "0px" }}>
              Add to Cart Your favorite items <AiOutlineShoppingCart />
            </p>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-center">
            <Image
              style={{ marginTop :"0px", paddingTop:"0px" , width: '200px', height: '200px', objectFit: 'cover', border: '1px solid black', borderRadius: '50%' }}
              src="https://unblast.com/wp-content/uploads/2020/10/Fast-Delivery-Vector-Illustration.jpg"
              roundedCircle
            />
            <p className="text-center mt-2" style={{ fontFamily: "'Playfair', serif", textTransform: "capitalize", marginBottom: "0px" }}>
              Get Fast Delivery <TbTruckDelivery />
            </p>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-center">
            <Image
              style={{ marginTop :"0px", paddingTop:"0px" , width: '200px', height: '200px', objectFit: 'cover', border: '1px solid black', borderRadius: '50%' }}
              src="https://img.freepik.com/free-vector/add-cart-concept-illustration_114360-1435.jpg?w=2000"
              roundedCircle
            />
            <p className="text-center mt-2" style={{ fontFamily: "'Playfair', serif", textTransform: "capitalize", marginBottom: "0px" }}>
              Get Products on sale <MdSell />
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
