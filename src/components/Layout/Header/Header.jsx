import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "../icons";
import NavLink from "./NavLink";

import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("header__menu__mobile")}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            color="black"
            bg={"white"}
          />
          <MenuList>
            <MenuItem>introduction</MenuItem>
            <MenuItem>solution </MenuItem>
            <MenuItem>rate plan</MenuItem>
            <MenuItem>login</MenuItem>
            <MenuItem>apply for free use</MenuItem>
          </MenuList>
        </Menu>
      </ul>
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
