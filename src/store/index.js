import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    APIKey: 'a3eab8c1',
    movies: [],
    movieDetails: {}
  },
  getters: {
    getMovieResults: (state) => {
      return state.movies;
    },

    getMovieDetails: (state) => {
      return state.movieDetails;
    }
  },
  mutations: {
    setMovies: (state, movies) => {
      state.movies = movies;
    },

    setMovieDetails: (state, details) => {
      // clear previous movieDetails
      state.movieDetails = {};
      state.movieDetails = details;
    },
  },
  actions: {
    fetchMovies({ state, commit }, { title }) {
      axios.get(`http://www.omdbapi.com/?apikey=${state.APIKey}&s=${title}`)
        .then(response => {
          commit('setMovies', response.data.Search);
        })
        .catch(function (error) {
          console.log(error);
        })
    },

    fetchMovieDetails({ state, commit }, { movieId }) {
      axios.get(`http://www.omdbapi.com/?apikey=${state.APIKey}&i=${movieId}`)
        .then(response => {
          commit('setMovieDetails', response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  },
  modules: {
  }
})
