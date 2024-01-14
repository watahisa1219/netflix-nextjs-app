import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "../modules/axios";
import { feachGenre } from "../modules/request";
import Styles from "../styles/Row.module.css";

const base_url = "https://image.tmdb.org/t/p/original";

export const Row = ({ title, fetchUrl, isLargeRow }) => {

  // stateの初期化
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const router = useRouter();

  // URL更新時の処理
  useEffect(() => {
    (async() => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      const requestGenre = await axios.get(feachGenre);
      setGenres(requestGenre.data.genres);
    })();
  }, [fetchUrl]);

  // 作品押下時の処理
  const handleClick = async (movie) => {

    // filterにてgenreのListを繰り返し、
    // クリックしたmovieのidsが含まれている場合のみ変数genreNameに格納
    const genreName = genres.filter((genre) =>
      movie.genre_ids.includes(genre.id)
    ).map((genre) =>
      genre.name
    )

    // 詳細ページに遷移
    router.push({
      pathname:"/detail",
      query:{
        movie: JSON.stringify(movie),
        genreName:JSON.stringify(genreName)
      }
    });
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
    </div>
  );
};