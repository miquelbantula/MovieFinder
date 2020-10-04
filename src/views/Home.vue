<template>
  <div>
    <form action="submit">
    <input type="text" v-model="title" name="searchMovie" placeholder="Find a movie" />
    <button type="submit" @click.prevent="fetchMovieResults">Search</button>
    </form>

    <div v-for="(result, idx) in getMovieResults" :key="idx">
      {{ result }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  data() {
    return {
      title: '',
    }
  },

  computed: {
    ...mapGetters(['getMovieResults']),
  },

  methods: {
    ...mapActions(['fetchMovies']),

    fetchMovieResults() {
      this.fetchMovies({ title: this.title });
    }
  }
}
</script>
