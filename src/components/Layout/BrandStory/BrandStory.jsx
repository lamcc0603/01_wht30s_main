import { Grid, GridItem } from "@chakra-ui/react";
import classNames from "classnames/bind";
import styles from "./BrandStory.module.scss";
import SeeMore from "../Button/SeeMore";
import obj1 from "../../../assets/images/object-01.png";
import obj2 from "../../../assets/images/object-02.png";
import obj3 from "../../../assets/images/object-03.png";
import obj4 from "../../../assets/images/object-04.png";
import obj5 from "../../../assets/images/object-05.png";
import obj6 from "../../../assets/images/object-06.png";
import obj7 from "../../../assets/images/object-07.png";
import Title from "../Title/Title";

const cx = classNames.bind(styles);

function BrandStory() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("brand__title")}>
        <Title
          title="brand story"
          sup="모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."
        />
      </div>
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={"30px"}
        h="100%"
        className={cx("wrapper__grid")}
      >
        <GridItem colSpan={2} className={cx("obj__list__left")}>
          <img src={obj1} alt="obj1" className={cx("obj__1")} />
          <div className={cx("obj__stab__left")}>
            <img src={obj6} alt="obj6" className={cx("obj__6")} />
            <img src={obj7} alt="obj7" className={cx("obj__7")} />
          </div>
        </GridItem>
        <GridItem colSpan={8}>
          <Grid
            className={cx("collaboration")}
            templateColumns="repeat(2, 1fr)"
          >
            <GridItem colSpan={1}></GridItem>
            <GridItem className={cx("brand__story")} colSpan={1}>
              <p className={cx("brand__story__title")}>
                What Happened’s Brand story
              </p>
              <span className={cx("brand__story__sup")}>
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
                풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다.
                내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
                끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고
                고행을 끝에 설산에서 황금시대를 이상을 운다.
              </span>
              <div className={cx("button__bottom")}>
                <SeeMore href={""} />
              </div>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={2} className={cx("obj__list__right")}>
          <div className={cx("obj__stab__top")}>
            <img src={obj2} alt="obj2" className={cx("obj__2")} />
            <img src={obj3} alt="obj3" className={cx("obj__3")} />
          </div>
          <img src={obj4} alt="obj4" className={cx("obj__4")} />
          <img src={obj5} alt="obj5" className={cx("obj__5")} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default BrandStory;
