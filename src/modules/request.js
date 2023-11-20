// TMDBのAPIKEY
export const API_KEY = "b091e7fc61a2ef93d5f345147ba522ea";
export const feachGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

export const action = {
    id:28,
    genreName:'Action'
};
export const comedy = {
    id:35,
    genreName:'Comedy'
};
export const horror = 27;
export const animation = 16;
export const documentary = 99;
export const netflix = 213;

// 動画の項目リスト指定
export const requests ={
    feachTrending:`/trending/all/week?api_key=${API_KEY}&language=ja`,
    feachNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=${netflix}`,
    // feactTopRated:`/discover/tv?api_key=${API_KEY}&languager=en-us`,
    feactTopRated:`/discover/movie?api_key=${API_KEY}&with_original_language=ja&region=JP`,
    feactActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=${action.id}`,
    feactComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=${comedy.id}&with_original_language=ja&region=JP`,
    feactHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=${horror}`,
    feactRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=${animation}&with_original_language=ja&region=JP`,
    feactDocumentMovies:`/discover/movie?api_key=${API_KEY}&with_genres=${documentary}&with_original_language=ja&region=JP`,
}