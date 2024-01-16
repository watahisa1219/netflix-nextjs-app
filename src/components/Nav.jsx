import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { common } from "../modules/common";
import Styles from "../styles/Nav.module.css";

export const Nav = () => {

  // stateの初期化 ヘッダー表示の処理設定をfalseに指定
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleShow = () => {
      // 縦軸のスクロールが設定値を超えた場合にヘッダーを表示
      if (window.scrollY > common.OVER_SCROLL_Y_BALUE) {
        setShow(true);
      } else {
        // ヘッダーを非表示
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleShow);
  }, []);

    // 作品押下時の処理
    const accountClick = async () => {
      //accountページに遷移
      router.push({
        pathname:"/account"
      });
    };

  return (
    <div className={`${Styles.Nav} ${show && Styles.NavBlack}`}>
      <img
        className={Styles.NavLogo}
        src="/image/NetflixLogo.png"
        alt="Netflix Logo"
      />
      <img
        className={Styles.NavAccount}
        src="/image/emerald.jpg"
        alt="account"
        onClick={() => accountClick()}
      />
    </div>
  );
};