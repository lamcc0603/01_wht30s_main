import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

import banner from "../../../assets/images/banner1.png";
const cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx("wrapper")}>
      <img src={banner} alt="banner" />
    </div>
  );
}

export default Banner;
