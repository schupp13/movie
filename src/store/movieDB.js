// Utilities
import { defineStore } from 'pinia';
import axios from 'axios';


 const MOVIE_DB_AXIOS =  axios.create({
    baseURL: import.meta.env.VITE_MOVIE_DB_API,
   
});

export const useMovieDBStore = defineStore('useMovieDBStore', {
  state: () => ({
    trendingMovies: {},
    trendingTvShows: {},
    movieDBconfig: {}
  }),
  getters: {
    getTrendingMovies(state) {
      return state.trendingMovies?.data
    },
     getTrendingTvShows(state) {
      return state.trendingTvShows?.data
    },
    getTopTenTrendingMovies(state){
        return this.getTrendingMovies?.results?.slice(0,10)
    },
    getDepOptimizationConfig(state) {
      return state.movieDBconfig
    }
  },
  actions: {

    async fetchConfig() {
      try{
        const response = await MOVIE_DB_AXIOS.get(`/configuration`)
        this.movieDBconfig  = response;
      }catch(e){
        console.log(e);
      }
    },

     async fetchTrendingMovies(query = {page: 1}, timeWindow="week") {
        try{
            const response = await MOVIE_DB_AXIOS.get(`/trending/movie/${timeWindow}`, {params: {...query}});
            this.trendingMovies = response;
        }catch(e){
            console.log(e)
        }
       
    },
     async fetchTrendingTvShows(query = {page: 1}, timeWindow="week") {
        try{
            const response = await MOVIE_DB_AXIOS.get(`/trending/tv/${timeWindow}`, {params: {...query}});
            this.trendingTvShows = response;
        }catch(e){
            console.log(e)
        }
       
    },
  },
})
