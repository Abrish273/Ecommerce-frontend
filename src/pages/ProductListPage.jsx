import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import PaginationComponent from "../component/PaginationComponent";
import ProductForListComponent from "../component/ProductForListComponent";
import SortOptionsComponent from "../component/SortOptionsComponent";
import PriceFilterComponent from "../component/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../component/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../component/filterQueryResultOptions/CategoryFilterComponent";
import AttributesFilterComponent from "../component/filterQueryResultOptions/AttributesFilterComponent";
const ProductListPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              FILTER:
              <br />
              <PriceFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary">Filter</Button>
              <Button variant="danger">Reset Filters</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <ProductForListComponent
              key={idx}
              images={["games", "monitors", "tablets", "games", "monitors"]}
              idx={idx}
            />
          ))}
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;
