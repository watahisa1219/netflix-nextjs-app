import React, { useState, useEffect } from "react";
import Styles from "./styles/AppDetail.module.css";
import { MovieDetail } from "./components/MovieDetail";

const AppDetail = () => {
  // stateの初期化
  const [movie, setMovie] = useState("");
  const [genres, setGenres] = useState([]);

  // レンダリング完了時にURLを取得
  useEffect(() => {
    if (typeof window !== "undefined") {
      // URLを取得
      let url = new URL(window.location.href);
      // URLSearchParamsオブジェクトのgetメソッドにてパラメータを指定取得
      setMovie(JSON.parse(url.searchParams.get('movie')));
      setGenres(JSON.parse(url.searchParams.get('genreName')));
    }
  },[]);

  return (
    <div className={Styles.AppDetail}>
      <MovieDetail
        movie={movie}
        genres={genres}
      />
    </div>
  );
}

export default AppDetail;
