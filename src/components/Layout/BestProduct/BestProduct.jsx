import classNames from "classnames/bind";
import styles from "./BestProduct.module.scss";
import { Grid, GridItem } from "@chakra-ui/react";
import photo1 from "../../../assets/images/best-image-01.png";
import photo2 from "../../../assets/images/best-image-02.png";
import photo3 from "../../../assets/images/best-image-03.png";

import production1 from "../../../assets/images/producticon-01.png";
import production2 from "../../../assets/images/producticon-02.png";
import production3 from "../../../assets/images/producticon-03.png";
import goIcon from "../../../assets/images/go-icon.png";
import Title from "../Title/Title";
const cx = classNames.bind(styles);

function BestProduct() {
  const bestProduct = [
    {
      id: 1,
      img: photo1,
      production: production1,
    },
    {
      id: 2,
      img: photo2,
      production: production2,
    },
    {
      id: 3,
      img: photo3,
      production: production3,
    },
  ];
  return (
    <div className={cx("wrapper")}>
      {" "}
      <Grid h="100%" templateColumns="repeat(12, 1fr)" gap={"30px"}>
        <GridItem colSpan={1} bg="" />
        <GridItem colSpan={10} bg="">
          <Grid templateColumns="repeat(10, 1fr)">
            <GridItem colSpan={3}></GridItem>
            <GridItem h={"36.2rem"} colSpan={4}>
              <div className={cx("bestproduct")}>
                <p className={cx("bestproduct__title")}>best product</p>
                <span className={cx("bestproduct__text")}>
                  How to create mobile-optimized videos in minutes. Not a
                  designer, every team makes a lot of videos Can be trimmed.
                  Take the first
                </span>
              </div>
            </GridItem>
            <GridItem colSpan={3}></GridItem>
          </Grid>
          <Grid
            templateColumns="repeat(3, 52.3rem)"
            className={cx("bestproduct__box")}
          >
            {bestProduct.map((item) => (
              <GridItem
                key={item.id}
                bg="tomato"
                className={cx("bestproduct__item")}
              >
                <div className={cx("bestproduct__img")}>
                  <img src={item.img} alt="bestproduct1" />
                  <img
                    className={cx("bestproduct__production")}
                    src={item.production}
                    alt={item.img + item.id}
                  />
                </div>
                <div className={cx("bestproduct__optimized")}>
                  <span className={cx("bestproduct__optimized__text")}>
                    How to create mobile-optimized
                  </span>
                  <img
                    className={cx("bestproduct__optimized__icon")}
                    src={goIcon}
                    alt="goicon"
                  />
                </div>
              </GridItem>
            ))}
          </Grid>
        </GridItem>

        <GridItem colSpan={1} bg="" />
      </Grid>
    </div>
  );
}

export default BestProduct;
