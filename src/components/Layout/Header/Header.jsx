import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "../icons";
import NavLink from "./NavLink";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header__logo")}>
        <img src={logo.logo} alt="logo" />
      </div>
      <ul className={cx("header__menu")}>
        <NavLink href={"#"} name="introduction" />
        <NavLink href={"#"} name="solution" />
        <NavLink href={"#"} name="rate plan" />
        <NavLink href={"#"} name="login" />
        <NavLink href={"#"} name="apply for free use" />
      </ul>
    </div>
  );
}

export default Header;
