<template>
  <div>
    <div class="movies">
      <MovieCard v-for="(movie, idx) in getMovieResults" :key="idx" :movie="movie" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieCard from "@/components/MovieCard";
export default {
  computed: {
    ...mapGetters(["getMovieResults"])
  },

  components: {
    MovieCard
  }
};
</script>

<style scoped lang="scss">
.movies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}
</style>