import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "../modules/axios";
import { fetchGenre } from "../modules/request";
import { common } from "../modules/common";
import Styles from "../styles/Row.module.css";

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

      const requestGenre = await axios.get(fetchGenre);
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
            // { largeサイズと通常サイズの画像クラス名の分岐 }
            className={`${Styles.RowPoster} ${isLargeRow && Styles.RowPosterLarge}`}
            // { largeサイズと通常サイズの画像クラスパスの分岐 }
            src={`${common.TMDB_BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
    </div>
  );
};