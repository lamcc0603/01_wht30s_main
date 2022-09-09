import React from "react";
import classNames from "classnames/bind";
import styles from "./Title.module.scss";
const cx = classNames.bind(styles);

function Title({ title, sup }) {
  return (
    <div className={cx("brand__title")}>
      <p className={cx("title")}>{title}</p>
      <span className={cx("title")}>{sup}</span>
    </div>
  );
}

export default Title;
