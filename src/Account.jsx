import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import Styles from "./styles/Account.module.css";

export const Account = () => {
  // stateの初期化
  const [accountUsers, setAccountUsers] = useState([])
  const router = useRouter();

  // URL更新時の処理
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiHostUrl = process.env.NEXT_PUBLIC_API_HOST
        const response = await axios.get(apiHostUrl,{headers: {"Access-Control-Allow-Origin": "*"}} );
        setAccountUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const accountClick = async (accountUser) => {
    // homeに遷移
    router.push({
      pathname:"/"
    });
  };

  return (
    <div className={Styles.Account}>
      <div className={Styles.HeaderLogoContainer}>
        <img className={Styles.HeaderLogo}
          src="/image/NetflixLogo.png"
          alt="Netflix Logo"
          />
      </div>
      <div className={Styles.QuestionContainer}>
        <p className={Styles.AccountQuestion}>どなたが観ますか？</p>
      </div>
      <div className={Styles.AccountContainer}>
        {/* APIデータのループ処理 */}
        {accountUsers.map((accountUser) => (
          <div key={accountUser.id}>
            <img className={Styles.AccountPictureContainer}
              src={accountUser.picture}
              alt={accountUser.name}
              onClick={() => accountClick(accountUser)}
            />
            <div className={Styles.AccountNameContainer}>
              <p>{accountUser.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;