<template>
  <div>
    <div class="mt-5">
      <h1>Find movies, TV shows and more</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
};
</script>
