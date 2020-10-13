<template>
  <div>
    <div class="my-4">
      <router-link :to="{ name: 'Results' }" class="back-to-results">&#60;&nbsp; Back to results</router-link>
    </div>
    <MovieCard extended v-if="getMovieDetails" :movie="getMovieDetails" />
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

<style scoped lang="scss">
.back-to-results {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}
</style>
