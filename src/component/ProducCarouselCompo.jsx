import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselCompo = () => {
  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Best Sellers in Laptops category</h3>
          </LinkContainer>
          <p>Dell Inspiration 15 3000 Laptop, 15.6 inch HD.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          style={{ height: "300px", objectFit: "cover" }}
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Best Sellers in Books category</h3>
          </LinkContainer>
          <p>World ofEric Carle, Hear Bear 30-Button Animal Sound Books.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Best Sellers in Cameras category</h3>
          </LinkContainer>
          <p>4k camcoder Video 60FPS 48MP Vlogging Camera for Youtube</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselCompo;
