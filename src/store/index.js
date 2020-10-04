import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    APIKey: 'a3eab8c1',
    movies: [],
  },
  getters: {
    getMovieResults: (state) => {
      return state.movies;
    }
  },
  mutations: {
    setMovies: (state, movies) => {
      state.movies = movies;
    }
  },
  actions: {
    fetchMovies({ state, commit }, { title }) {
      axios.get(`http://www.omdbapi.com/?apikey=${state.APIKey}&s=${title}`)
        .then(response => {
          console.log('resp', response)
          commit('setMovies', response.data.Search);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  },
  modules: {
  }
})
