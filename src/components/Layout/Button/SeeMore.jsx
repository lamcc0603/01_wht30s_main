import React from "react";
import classNames from "classnames/bind";
import styles from "./SeeMore.module.scss";

const cx = classNames.bind(styles);
function SeeMore({ href }) {
  return (
    <a className={cx("btn-seemore", "btn")} href={href}>
      <span>seemore</span>
    </a>
  );
}

export default SeeMore;
