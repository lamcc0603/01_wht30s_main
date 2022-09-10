import React from "react";
import classNames from "classnames/bind";
import styles from "./SupMenu.module.scss";

const cx = classNames.bind(styles);

function SupMenu({ menuItem, menuSup }) {
  return (
    <li className={cx("menu__item")}>
      {menuItem}
      <ul className={cx("menu__item__supmenu")}>
        {menuSup.map((item, index) => (
          <li className={cx("supmenu__item")} key={index}>
            <a href="/" className={cx("supmenu__link")}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SupMenu;
