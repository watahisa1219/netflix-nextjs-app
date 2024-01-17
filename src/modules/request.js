export const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
// ジャンル名の取得
export const fetchGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

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
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=ja`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=${netflix}`,
    fetchTopRated:`/discover/movie?api_key=${API_KEY}&with_original_language=ja&region=JP`,
    fetchActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=${action.id}`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=${comedy.id}&with_original_language=ja&region=JP`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=${horror}`,
    fetchRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=${animation}&with_original_language=ja&region=JP`,
    fetchDocumentMovies:`/discover/movie?api_key=${API_KEY}&with_genres=${documentary}&with_original_language=ja&region=JP`,
}