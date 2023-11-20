import React from "react";
import { Row } from "./Row";
import { Banner } from "./Banner";
import { Nav } from "./Nav";
import { requests } from "../modules/request";
import Styles from "../styles/App.module.css";

const App = () => {
  return (
    <div className={Styles.App}>
      <Nav />
      <Banner />
      <Row
        title="マイリスト"
        fetchUrl={requests.feactComedyMovies}
        />
      <Row
        title="Netflix オリジナル作品"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="新作" fetchUrl={requests.feactTopRated} />
      <Row title="人気急上昇の作品" fetchUrl={requests.feactRomanceMovies} />
      <Row title="もう一度観る" fetchUrl={requests.feactHorrorMovies} />
    </div>
  );
}

export default App;
