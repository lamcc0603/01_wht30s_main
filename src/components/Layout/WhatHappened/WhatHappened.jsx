import classNames from "classnames/bind";
import styles from "./WhatHappened.module.scss";

const cx = classNames.bind(styles);

function WhatHappened() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("banner__sup")}>
        <p className={cx("banner__title")}>what happened!</p>
        <p className={cx("banner__text")}>
          {" "}
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first step
          to your brand's success. How to create mobile-optimized videos in
          minutes.
        </p>
      </div>
    </div>
  );
}

export default WhatHappened;
