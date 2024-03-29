import React, { useState } from "react";
import { common, playOption } from "../modules/common";
import { API_KEY } from "../modules/request";
import Styles from "../styles/MovieDetail.module.css";
import PlayButton from "./PlayButton";
import axios from 'axios'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export const MovieDetail = ({movie, genres}) => {
  // stateの初期化
  const [trailerUrl, setTrailerUrl] = useState("");

  // 再生ボタンクリック後
  const playButtonClick = (movie) => {
    // 再度動画クリック時、再表示されるようにtrailerUrlの初期化
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        //動画を取得
        let trailerUrl = axios.get(`${TRAILER_BASE_URL}/movie/${movie.id}/videos?api_key=`+ API_KEY);
        //動画の配列の0番目のkeyにYouTubeのidが入っているので代入
        setTrailerUrl(trailerUrl.data.results[0].key);
      } catch (error) {
        console.error("Error fetching data:", error);
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

  return (
    <div
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
      <div className={Styles.movieContents}>
        <h1 className={Styles.movieTitle}>
          {movie.title || movie.name || movie.orignal_name}
        </h1>

        <div className={Styles.movieButtonContainer}>
          <PlayButton onClick={() => playButtonClick(movie)} />
          <div className={Styles.iconContainer}>
            <AddIcon className={Styles.importIcon} />
          </div>
          <div className={Styles.iconContainer}>
            <ThumbUpAltIcon className={Styles.importIcon} />
          </div>
          <div className={Styles.iconContainer}>
            <ThumbDownAltIcon className={Styles.importIcon} />
          </div>
        </div>

        <div className={Styles.movieFadeBottom}> </div>
        <div className={Styles.movieContainer}>
          <div className={Styles.movieLeftColumn}>
            <p className={Styles.matchText}>{common.MATCH}% match</p>
            <p className={Styles.movieDescription}>{movie.overview}</p>
          </div>
          <div className={Styles.movieRightColumn}>
            <p className={Styles.genres}><span style={{ color: "gray" }}>genres:</span> {genres}</p>
          </div>
        </div>
        <div className={Styles.videoContainer}>
          <div className={Styles.videoPlayer}>{trailerUrl && <YouTube videoId={trailerUrl} opts={playOption} />}</div>
        </div>
      </div>
    </div>
  );
};