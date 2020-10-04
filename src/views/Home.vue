<template>
  <div>
    <form action="submit">
    <input type="text" v-model="title" name="searchMovie" placeholder="Find a movie" />
    <button type="submit" @click.prevent="fetchMovies">Search</button>
    </form>

    <div v-for="(result, idx) in results" :key="idx">
      {{ result }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  data() {
    return {
      APIKey: 'a3eab8c1',
      results: [],
      title: '',
    }
  },

  methods: {
    fetchMovies() {
      axios.get(`http://www.omdbapi.com/?apikey=${this.APIKey}&s=${this.title}`).then(response => {
        console.log('response', response);
        this.results = response;
      })
    }
  }
}
</script>
