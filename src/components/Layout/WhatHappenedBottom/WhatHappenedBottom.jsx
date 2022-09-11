import { Grid, GridItem } from "@chakra-ui/react";
import classNames from "classnames/bind";
import styles from "./WhatHappenedBottom.module.scss";
import Title from "../Title/Title";
import SeeMore from "../Button/SeeMore";

import video from "../../../assets/images/video.png";
import videoObj1 from "../../../assets/images/video-object-01.png";
import videoObj2 from "../../../assets/images/video-object-02.png";
import videoObj3 from "../../../assets/images/video-object-03.png";
import videoObj4 from "../../../assets/images/video-object-04.png";
import videoObj5 from "../../../assets/images/video-object-05.png";
import videoObj6 from "../../../assets/images/video-object-06.png";
import videoObj7 from "../../../assets/images/video-object-07.png";
import videoObj8 from "../../../assets/images/video-object-08.png";
import videoObj9 from "../../../assets/images/video-object-09.png";
const cx = classNames.bind(styles);

function WhatHappenedBottom() {
  return (
    <div className={cx("wrapper")}>
      <Grid
        templateColumns="repeat(12,1fr)"
        gap={"3rem"}
        className={cx("wrapper__grid")}
      >
        <GridItem colSpan={2} className={cx("whathappened__grid__left")}>
          <img className={cx("whathappened__obj__1")} src={videoObj1} alt="" />
          <img className={cx("whathappened__obj__3")} src={videoObj3} alt="" />
          <img className={cx("whathappened__obj__4")} src={videoObj4} alt="" />
          <img className={cx("whathappened__obj__5")} src={videoObj5} alt="" />
        </GridItem>
        <GridItem colSpan={8}>
          <Grid
            templateColumns="repeat(8,1fr)"
            className={cx("whathappened__grid")}
          >
            <GridItem colSpan={2} />
            <GridItem colSpan={4}>
              <div>
                <div className={cx("whathappened")}>
                  <Title
                    lang="true"
                    title="what happened"
                    sup=" How to create mobile-optimized videos in minutes. Not a designer, 
every team makes a lot of videos Can be trimmed. Take the first"
                  />
                </div>
                <div className={cx("button__bottom")}>
                  <SeeMore href={""} />
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={2} />
          </Grid>

          <div className={cx("whathappened__banner")}>
            <img src={video} alt="" />
            <img
              className={cx("whathappened__obj__2")}
              src={videoObj2}
              alt=""
            />
          </div>
        </GridItem>
        <GridItem colSpan={2} className={cx("whathappened__grid__right")}>
          <img className={cx("whathappened__obj__6")} src={videoObj6} alt="" />
          <img className={cx("whathappened__obj__7")} src={videoObj7} alt="" />
          <img className={cx("whathappened__obj__8")} src={videoObj8} alt="" />
          <img className={cx("whathappened__obj__9")} src={videoObj9} alt="" />
        </GridItem>
      </Grid>
    </div>
  );
}

export default WhatHappenedBottom;
