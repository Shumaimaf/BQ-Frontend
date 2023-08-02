import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/Bs';
import { FaTwitter } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function Footersection() {
  return (
    <div className="bg-dark text-white py-4 mt-5" style={{ fontFamily:"'Playfair', serif" , textTransform:"capitalize"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className='fs-3'>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lacus at velit vestibulum, a iaculis orci sagittis.
            </p>
          </div>
          <div className="col-md-3">
            <h4 className='fs-3'>Contact</h4>
            <p>
              123 Street,
              <br />
              City, Country
              <br />
              <a href="mailto:info@example.com">Shumamimaf@gmail.com</a>
            </p>
          </div>
          <div className="col-md-3">
            <h4 className='fs-3'>Follow Us</h4>
            <div className="social-icons">
              <Row>
                <Col><BsFacebook/></Col>
                <Col><FaTwitter/></Col>
                <Col><AiOutlineInstagram/></Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="mb-0">© {new Date().getFullYear()} Your Company. All Rights Reserved</p>
      </div>
    </div>
  );
}
