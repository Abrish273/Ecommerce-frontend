import React from "react";
import ProductCarouselCompo from "../component/ProducCarouselCompo";
import CategoryCardCompo from "../component/CategoryCardCompo";
import { Row, Container } from "react-bootstrap";
const Homepage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Software",
    "Camera",
    "Books",
    "Videos",
  ];

  return (
    <>
      <ProductCarouselCompo />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, idx) => (
            <CategoryCardCompo key={idx} Category={category} Idx={idx} />
          ))}
        </Row>
      </Container>
      {/*{cata.map((cat) => (
        <CategoryCardCompo
          CardTitle={cat.title}
          CardBody={cat.content}
          CardButton={cat.button}
        />
      ))}*/}
    </>
  );
};

export default Homepage;

/* const cata = [
    { 
      _id: 1,
      title: "Tablets",
      content: "lorem ipsum dollor init",
      button: "easy pizzy",
    },
    {
      _id:2,
      title: "Tablets",
      content: "lorem ipsum dollor init",
      button: "easy pizzy",
    },
    {
      _id:3,
      title: "Tablets",
      content: "lorem ipsum dollor init",
      button: "easy pizzy",
    },
  ];*/
