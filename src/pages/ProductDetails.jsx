import React from "react";
import { Row, Col, Container, Image, ListGroup, Form } from "react-bootstrap";
import AddedToCartMessageComponent from "../component/AddedToCartMessageComponent";
import { Rating } from "react-simple-star-rating";

const ProductDetails = () => {
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row classNAme="mt-5">
        <Col md={4}>
          <Image fluid src="/images/games-category.png" />
          <Image fluid src="/images/monitors-category.png" />
          <Image fluid src="/images/tablets-category.png" />
          <Image fluid src="/images/games-category.png" />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="fluish">
                <ListGroup.Item>Cras sdnj djf</ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>Cras sdnj djf</ListGroup.Item>
                <ListGroup.Item>Cras sdnj djf</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>
                  <Form.Select
                    size="lg"
                    aria-label="Default select example"
                  ></Form.Select>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
            </Col>
          </Row>
          <hr />
          Send review form
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
