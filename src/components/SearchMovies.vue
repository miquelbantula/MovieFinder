<template>
  <div class="search-movies">
    <input
      type="text"
      v-model="title"
      name="searchMovie"
      placeholder="Find a movie"
      @keyup="fetchMovieResults()"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchMovies"]),

    fetchMovieResults() {
      if (this.title.length > 3) {
        this.fetchMovies({ title: this.title });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.search-movies {
  width: calc(100% - 1.5rem);

  input {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: $light-gray;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
}
</style>