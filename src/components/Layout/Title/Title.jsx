import React from "react";
import classNames from "classnames/bind";
import styles from "./Title.module.scss";
const cx = classNames.bind(styles);

function Title({ title, sup, lang = false }) {
  return (
    <div className={cx("brand__title")}>
      <p className={cx("title")}>{title}</p>
      <span className={cx(lang === "" ? "supKR" : "supEN")}>{sup}</span>
    </div>
  );
}

export default Title;
