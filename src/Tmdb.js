const API_KEY = "94a7e8a294107e0851384467a657c9f3";
const API_BASE = "https://api.themoviedb.org/3";

/*
  Netflix Originals
  Recomended For You (Trending)
  Top Rated
  Action 
  Comedy
  Horror
  Romance
  Documentary
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

const Tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix Originals",
        items: await basicFetch(
          `/discover/tv?with_network=24&page=7&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomended for You",
        items: await basicFetch(`/trending/all/week?language=en-US&api_key=${API_KEY}`),
      },
      {
        slug: "toprated",
        title: "Top Rated",
        items: await basicFetch(`/movie/top_rated?language=en-US&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Action",
        items: await basicFetch(
          `/discover/movie?language=en-US&with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await basicFetch(
          `/discover/movie?language=en-US&with_genres=35&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Horror",
        items: await basicFetch(
          `/discover/movie?language=en-US&with_genres=27&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?language=en-US&with_genres=10749&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentary",
        items: await basicFetch(
          `/discover/movie?language=en-US&with_genres=99&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}`);
          break;

        case "tv":
          info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);
          break;
          
        default: 
          info = null;
          break;
      }
    }

    return info;
  }
};

export default Tmdb;
