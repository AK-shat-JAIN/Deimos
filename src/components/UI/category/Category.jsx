import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Mexican Food",
    imgUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/mexican-taco-food-icon-5273342-4411792.png",
  },
  {
    display: "Itilian Food",
    imgUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/slice-of-pizza-with-mushrooms-4355230-3632430.png?f=webp",
  },

  {
    display: "Asian Food",
    imgUrl: "https://static.vecteezy.com/system/resources/previews/018/743/233/original/3d-illustration-of-asian-food-dango-japanese-food-png.png",
  },

  {
    display: "Chinese Food",
    imgUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/ramen-noodles-4894302-4077840.png",
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
