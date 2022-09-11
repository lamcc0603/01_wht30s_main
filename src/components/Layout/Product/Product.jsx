import classNames from "classnames/bind";
import styles from "./Product.module.scss";

import heartIcon from "../../../assets/images/hearticon.png";

const cx = classNames.bind(styles);
function Product({ photo, name, price, like }) {
  return (
    <div className={cx("product")}>
      <div className={cx("product__img")}>
        <img src={photo} alt="" />
      </div>
      <div className={cx("product__info")}>
        <div className={cx("product__info__name")}>
          <p>{name}</p>
        </div>
        <div className={cx("product__info__sup")}>
          <span className={cx("product__price")}>{price} won</span>
          <span className={cx("product__like")}>
            <img src={heartIcon} alt="heartIcon" />
            <span>{like}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
