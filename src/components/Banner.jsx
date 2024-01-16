import React, { useState, useEffect } from "react";
import axios from "../modules/axios";
import { requests } from "../modules/request";
import { common } from "../modules/common";
import Styles from "../styles/Banner.module.css";

export const Banner = () => {

  // stateの初期化
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async() => {
      const request = await axios.get(requests.feachNetflixOriginals);

      //apiからランダムで値を取得
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  // movie説明文の省略処理
  const truncate = (str, n) => {
    // undefinedを弾く
    if (str !== undefined) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  }

  return (
    <header
      className="Banner"
      style={{
        color: "#fff",
        objectFit: "contain",
        height: "560px",
        backgroundSize: "cover",
        backgroundImage: `url("${common.TMDB_BASE_URL}${movie.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className={Styles.BannerContents}>
        <h1 className={Styles.bannerTitle}>
          {movie.title || movie.name || movie.orignal_name}
        </h1>
        <div className={Styles.BannerButtons}>
          <button className={Styles.BannerButton}>再生</button>
          <button className={Styles.BannerButton}>もっと見る</button>
        </div>

        <h1 className={Styles.BannerDescription}>{truncate(movie.overview, 150)}</h1>
      </div>

      <div className={Styles.BannerFadeBottom} />
    </header>
  );
};