<template>
  <div>
    <div class="my-4">
      <SearchMovies />
    </div>

    <div class="my-4">
      <MovieCards />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MovieCards from "@/components/MovieCards";
import SearchMovies from "@/components/SearchMovies";

export default {
  name: "HomePage",
  data() {
    return {
      title: ""
    };
  },

  computed: {
    ...mapGetters(["getMovieResults"])
  },

  components: {
    MovieCards,
    SearchMovies
  }
};
</script>
