import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function NavLink({ href, name }) {
  return (
    <li className={cx("menu__item")}>
      <a href={href} className={cx("menu__link")}>
        {name}
      </a>
    </li>
  );
}

export default NavLink;
