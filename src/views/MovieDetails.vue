<template>
  <div>
    <router-link :to="{ name: 'Home' }">Back to search</router-link>
    <MovieCard v-if="getMovieDetails" :movie="getMovieDetails" />
    <pre>{{ getMovieDetails }}</pre>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    movieId: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters(["getMovieDetails"])
  },

  methods: {
    ...mapActions(["fetchMovieDetails"]),

    fetchOneMovieDetails() {
      this.fetchMovieDetails({
        movieId: this.movieId
      });
    }
  },

  mounted() {
    this.fetchOneMovieDetails();
  },

  watch: {
    movieId() {
      this.fetchOneMovieDetails();
    }
  },

  components: {
    MovieCard
  }
};
</script>
