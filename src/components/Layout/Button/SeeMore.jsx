import React from "react";
import classNames from "classnames/bind";
import styles from "./SeeMore.module.scss";

const cx = classNames.bind(styles);
function SeeMore() {
  return (
    <a className={cx("btn-seemore", "btn")}>
      <span>seemore</span>
    </a>
  );
}

export default SeeMore;
