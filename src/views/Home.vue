<template>
  <div>
    <div class="my-4">
      <SearchMovies />
    </div>

    <div class="my-4">
      <router-view />
    </div>
    
     
   
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
    SearchMovies
  }
};
</script>
