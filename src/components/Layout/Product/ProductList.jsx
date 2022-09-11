import { Grid, GridItem } from "@chakra-ui/react";
import classNames from "classnames/bind";
import styles from "./ProductList.module.scss";

import Product from "./Product";
import photo1 from "../../../assets/images/img-01.png";
import photo2 from "../../../assets/images/img-02.png";
import photo3 from "../../../assets/images/img-03.png";
import photo4 from "../../../assets/images/img-04.png";
import photo5 from "../../../assets/images/img-05.png";
import photo6 from "../../../assets/images/img-06.png";
import photo7 from "../../../assets/images/img-07.png";
import photo8 from "../../../assets/images/img-08.png";
import photo9 from "../../../assets/images/img-09.png";
import photo10 from "../../../assets/images/img-10.png";
import photo11 from "../../../assets/images/img-11.png";
import photo12 from "../../../assets/images/img-12.png";
import photo13 from "../../../assets/images/img-13.png";
import photo14 from "../../../assets/images/img-14.png";
import photo15 from "../../../assets/images/img-15.png";
import photo16 from "../../../assets/images/img-16.png";
import photo17 from "../../../assets/images/img-17.png";
import photo18 from "../../../assets/images/img-18.png";
import photo19 from "../../../assets/images/img-19.png";
import photo20 from "../../../assets/images/img-20.png";
import photo21 from "../../../assets/images/img-21.png";
import photo22 from "../../../assets/images/img-22.png";
import photo23 from "../../../assets/images/img-23.png";
import photo24 from "../../../assets/images/img-24.png";
import photo25 from "../../../assets/images/img-25.png";
import SeeMore from "../Button/SeeMore";
function ProductList() {
  const productList = [
    {
      id: 1,
      img: photo1,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 2,
      img: photo2,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 3,
      img: photo3,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 4,
      img: photo4,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 5,
      img: photo5,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 6,
      img: photo6,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 7,
      img: photo7,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 8,
      img: photo8,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 9,
      img: photo9,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 10,
      img: photo10,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 11,
      img: photo11,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 12,
      img: photo12,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 13,
      img: photo13,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 14,
      img: photo14,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 15,
      img: photo15,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 16,
      img: photo16,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 17,
      img: photo17,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 18,
      img: photo18,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 19,
      img: photo19,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 20,
      img: photo20,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 21,
      img: photo21,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 22,
      img: photo22,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 23,
      img: photo23,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 24,
      img: photo24,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
    {
      id: 25,
      img: photo25,
      name: "[What happen] How to create",
      price: "2,500",
      like: 236,
    },
  ];
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <Grid
        className={cx("productlist")}
        h="100%"
        templateColumns="repeat(12, 1fr)"
        gap={"30px"}
      >
        <GridItem colSpan={1} />
        <GridItem colSpan={10}>
          <Grid
            className={cx("productlist__grid")}
            templateColumns="repeat(10, 1fr)"
            gap={"2rem"}
          >
            {productList.map((item) => (
              <GridItem colSpan={2} key={item.id}>
                <Product
                  photo={item.img}
                  name={item.name}
                  price={item.price}
                  like={item.like}
                />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
        <GridItem colSpan={1} />
      </Grid>
      <div className={cx("button__bottom")}>
        <SeeMore href={""} />
      </div>
    </div>
  );
}

export default ProductList;
