<template>
  <div class="search-movies">
    <form @submit.prevent="fetchMovieResults()">
      <input type="text" v-model="title" name="searchMovie" placeholder="Search movies, series, TV shows.." />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: ""
    };
  },

  methods: {
    ...mapActions(["fetchMovies"]),

    fetchMovieResults() {
      if (this.title.length > 3) {
        this.fetchMovies({ title: this.title });
        // avoiding redundant navigation
        if (this.$route.name !== "Results") {
          this.$router.push({ name: "Results" });
        }
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
    background: $light-gray;
    background-clip: padding-box;
    border: none;
    border-radius: 0.5rem;
  }
}
</style>