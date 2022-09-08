import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "../icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header__logo")}>
        <img src={logo.logo} alt="logo" />
      </div>
      <ul className={cx("header__menu")}>
        <li className={cx("menu__item")}>
          <a className={cx("menu__link")}>introduction</a>
        </li>
        <li className={cx("menu__item")}>
          <a className={cx("menu__link")}>solution</a>
        </li>{" "}
        <li className={cx("menu__item")}>
          <a className={cx("menu__link")}>rate plan</a>
        </li>{" "}
        <li className={cx("menu__item")}>
          <a className={cx("menu__link")}>login</a>
        </li>
        <li className={cx("menu__item")}>
          <a className={cx("menu__link")}>apply for free use</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
