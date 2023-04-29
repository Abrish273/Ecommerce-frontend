import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardCompo = ({ Category, Idx }) => {
  const images = [
    "/images/tablets-category.png",
    "/images/monitors-category.png",
    "/images/games-category.png",
    "/images/tablets-category.png",
    "/images/tablets-category.png",
    "/images/tablets-category.png",
    "/images/tablets-category.png",
    "/images/tablets-category.png",
  ];
  return (
    <Card>
      <Card.Img crossOrigin="anonymous" variant="top" src={images[Idx]} />
      <Card.Body>
        <Card.Title>
          {/*CardTitle*/}
          {Category}
        </Card.Title>
        <Card.Text>{/*CardBody*/}Body</Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go to category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardCompo;
