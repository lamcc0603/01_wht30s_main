import classNames from "classnames/bind";
import styles from "./HappenedIssue.module.scss";
import Title from "../Title/Title";
import SeeMore from "../Button/SeeMore";
import newObj2 from "../../../assets/images/news-object-02.png";
import newObj32 from "../../../assets/images/news-object-03-2.png";
import newImg from "../../../assets/images/news-img-01.png";
import { Grid, GridItem } from "@chakra-ui/react";
import BrandIssue from "../BrandIssue/BrandIssue";
import photo2 from "../../../assets/images/news-img-02.png";
import photo3 from "../../../assets/images/news-img-03.png";
import photo4 from "../../../assets/images/news-img-04.png";
import photo5 from "../../../assets/images/news-img-05.png";

const cx = classNames.bind(styles);

function HappenedIssue() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("newobj")}>
        <img className={cx("newobj__32")} src={newObj32} alt="newobj32" />
        <img className={cx("newobj__2")} src={newObj2} alt="newobj2" />
      </div>
      <div className={cx("happened__issue")}>
        <Title
          title={"Happened’s issue"}
          sup="모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."
        />
      </div>
      <div className={cx("button__bottom")}>
        <SeeMore href={""} />
      </div>
      <Grid
        className={cx("happened__grid")}
        templateColumns="repeat(5,20%)"
        h="48rem"
      >
        <GridItem className={cx("happened__item1")}>
          <p>whpn issue</p>
          <img src={newImg} alt="newimg" />
        </GridItem>
        <GridItem className={cx("happened__item")}>
          <div className={cx("brand__tag")}>
            <p>b brand</p>
          </div>
          <div className={cx("brand__img")}>
            <img src={photo2} alt="" />
          </div>
        </GridItem>
        <GridItem className={cx("happened__item")}>
          <div className={cx("brand__tag")}>
            <p>c brand</p>
          </div>
          <div className={cx("brand__img")}>
            <img src={photo3} alt="" />
          </div>
        </GridItem>
        <GridItem className={cx("happened__item")}>
          <div className={cx("brand__tag")}>
            <p>d brand</p>
          </div>
          <div className={cx("brand__img")}>
            <img src={photo4} alt="" />
          </div>
        </GridItem>
        <GridItem className={cx("happened__item")}>
          <div className={cx("brand__tag")}>
            <p>d brand</p>
          </div>
          <div className={cx("brand__img")}>
            <img src={photo5} alt="" />
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}

export default HappenedIssue;
