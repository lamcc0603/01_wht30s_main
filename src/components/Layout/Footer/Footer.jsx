import { Grid, GridItem } from "@chakra-ui/react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

import snsicon01 from "../../../assets/images/snsicon-01.png";
import snsicon02 from "../../../assets/images/snsicon-02.png";
import snsicon03 from "../../../assets/images/snsicon-03.png";
import SupMenu from "../SupMenu/SupMenu";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <>
      <div className={cx("wrapper")}>
        <Grid templateColumns="repeat(12,1fr)" className={cx("footer")}>
          <GridItem colSpan={6} className={cx("footer__left")}>
            <div className={cx("footer__left")}>
              <p>what happened</p>
              <span>[공지] 개인 정보 처리 방침 변경 사전 안내</span>
              <span>[공지] 29CM 강남 스토어 영업 종료</span>
              <span>[공지] 개인 정보 처리 방침 변경 사전 안내</span>
              <span>[공지] iOS 10 이하 버전 지원 중단 안내</span>
              <span>[공지] 개인 정보 처리 방침 변경 사전 안내</span>
            </div>
          </GridItem>
          <GridItem colSpan={6} className={cx("footer__right")}>
            <ul className={cx("menu")}>
              <SupMenu
                menuItem={"about us"}
                menuSup={["회사소개", "인재 채용", "상시 할인 혜택"]}
              />
              <SupMenu
                menuItem={"my order"}
                menuSup={[
                  "내 주문",
                  "주문 배송",
                  "취소 / 교환 / 반품 내역",
                  "상품 리뷰 내역",
                  "증빙 서류 발급",
                ]}
              />
              <SupMenu
                menuItem={"my account"}
                menuSup={[
                  "회원 정보 수정",
                  "회원 등급",
                  "마일리지 현황",
                  "쿠폰",
                ]}
              />
              <SupMenu
                menuItem={"help"}
                menuSup={[
                  "1 : 1 상담 내역",
                  "상품 Q & A 내역",
                  "공지 사항",
                  "자주하는 질문",
                  "고객의 소리",
                ]}
              />
            </ul>
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(12,1fr)" className={cx("copyright")}>
          <GridItem colSpan={6} className={cx("copyright__left")}>
            <p>
              © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
              사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
            </p>
            <p>
              서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
              이용약관 l 개인정보처리방침
            </p>
          </GridItem>
          <GridItem colSpan={6} className={cx("copyright__right")}>
            <a href="/">
              <img src={snsicon01} alt="" />
            </a>
            <a href="/">
              <img src={snsicon02} alt="" />
            </a>
            <a href="/">
              <img src={snsicon03} alt="" />
            </a>
          </GridItem>
        </Grid>
      </div>
      <div className={cx("wrapper__mobile")}>
        <ul className={cx("menu__footer")}>
          <li className={cx("menu__footer__item")}>
            <a className={cx("menu__footer__link")} href={"/"}>
              What happened
            </a>
          </li>
          <li className={cx("menu__footer__item")}>
            <a className={cx("menu__footer__link")} href={"/"}>
              about us
            </a>
          </li>
          <li className={cx("menu__footer__item")}>
            <a className={cx("menu__footer__link")} href={"/"}>
              my order
            </a>
          </li>
          <li className={cx("menu__footer__item")}>
            <a className={cx("menu__footer__link")} href={"/"}>
              my account
            </a>
          </li>
          <li className={cx("menu__footer__item")}>
            <a className={cx("menu__footer__link")} href={"/"}>
              help
            </a>
          </li>
        </ul>
        <div className={cx("copyright")}>
          <div className={cx("copyright__left")}>
            <p>
              © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
              사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
            </p>
            <p>
              서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
              이용약관 l 개인정보처리방침
            </p>
          </div>
          <div className={cx("copyright__right")}>
            <a href="/">
              <img src={snsicon01} alt="" />
            </a>
            <a href="/">
              <img src={snsicon02} alt="" />
            </a>
            <a href="/">
              <img src={snsicon03} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
