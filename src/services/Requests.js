/** KEY REMOVED FOR PRIVACY */
const API_KEY = "**********************";

const requests = {
    getOriginals: {
        title: "Streamed Originals",
        url: `/discover/tv?api_key=${API_KEY}&with_networks=213`
    },
    getTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    } ,
    getTopRated: {
        title: 'Top Rated',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749` 
    },
    getActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28` 
    },
    getComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35` 
    },
    getHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27` 
    },
    getRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749` 
    },
    getDocumentaries: {
        title: 'Documentaries',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99` 
    }
}


// const requests = {
//     getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     getOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     getTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
// }

export default requests;