import Styles from "../styles/MovieDetail.module.css";

export const MovieDetail = ({movie, genres}) => {

  // 説明文の省略
  // const truncate = (str, n) => {
  //   if (str !== undefined) {
  //     return str.length > n ? str.substr(0, n - 1) + "..." : str;
  //   }
  // }

  return (
    <div className={Styles.movieContainer}>
      <div className={Styles.movieLeftColumn}>
        <p className={Styles.matchText}>98% match</p>
        <p className={Styles.movieDescription}>{movie.overview}</p>
      </div>
      <div className={Styles.movieRightColumn}>
        <p className={Styles.genres}><span style={{color: "gray"}}>genres:</span> {genres}</p>
      </div>
    </div>
  );
};