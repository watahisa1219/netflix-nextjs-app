import React, { useState, useEffect } from "react";
import axios from "../modules/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { API_KEY } from "../modules/request";
import Styles from "../styles/Row.module.css";

const base_url = "https://image.tmdb.org/t/p/original";

export const Row = ({ title, fetchUrl, isLargeRow }) => {

  // stateの初期化
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // URL更新時の処理
  useEffect(() => {
    (async() => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    })();
  }, [fetchUrl]);

  // 作品押下時、再生の処理
  const handleClick = async (movie) => {
    // 再度動画クリック時、再表示されるようにtrailerUrlの初期化
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        //動画を取得
        let trailerurl = await axios.get(`/movie/${movie.id}/videos?api_key=`+ API_KEY);
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
  };

  // 再生画面の設定値
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return(
    <div className={Styles.Row}>
      <h2>{title}</h2>
      <div className={Styles.RowPosters}>
        {/* APIデータのループ処理 */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            // { 真偽 && JSXの記述 }
            className={`${Styles.RowPoster} ${isLargeRow && Styles.RowPosterLarge}`}
            // { 真偽 ? true時のJSXの記述 : false時のJSXの記述 }
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};