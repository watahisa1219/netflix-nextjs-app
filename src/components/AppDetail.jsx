import React, { useState, useEffect } from "react";
import Styles from "../styles/AppDetail.module.css";
import { TopMovieImage } from "./TopMovieImage";
import { MovieDetail } from "./MovieDetail";

const AppDetail = () => {
  // stateの初期化
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movie, setMovie] = useState("");
  const [genres, setGenres] = useState([]);

  // レンダリング完了時にURLを取得
  useEffect(() => {
    // URLを取得
    let url = new URL(window.location.href);
    // URLSearchParamsオブジェクトのgetメソッドにてパラメータを指定取得
    setMovie(JSON.parse(url.searchParams.get('movie')));
    setGenres(JSON.parse(url.searchParams.get('genreName')));
  },[]);

  console.log('movie')
  console.log(movie)
  console.log('genres')
  console.log(genres)

  // tod再生ボタンクリック後
  const playButtonClick = (movie) => {
    // 再度動画クリック時、再表示されるようにtrailerUrlの初期化
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        //動画を取得
        let trailerurl = axios.get(`/movie/${movie.id}/videos?api_key=`+ API_KEY);
        //動画の配列の0番目のkeyにYouTubeのidが入っているので代入
        setTrailerUrl(trailerurl.data.results[0].key);
      } catch (e) {
        console.log(e);
      } finally {
        console.log("例外実行");
      }
    }
    // movieオブジェクトから予告URLの検索
    movieTrailer(movie.name || movie.title || movie.original_name || "")
      .then((url) => {
        // urlが存在する場合に検索を実施
        if(url){
          // URLのパラメータvキー部分の切り出し取得
          let urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }
      })

    console.log("trailerUrl")
    console.log(trailerUrl)
  };

  return (
    <div className={Styles.AppDetail}>
      <TopMovieImage movie={movie}/>
      <MovieDetail
        movie={movie}
        genres={genres}/>
    </div>
  );
}

export default AppDetail;
