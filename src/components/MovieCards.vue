<template>
  <div>
    <div class="movies">
      <Slider>
        <SliderItem v-for="(slide, i) in numberOfSlides" :key="i" :idx="i">
          <MovieCard v-for="(movie, idx) in getMovieResults.slice(i, i + 4)" :key="idx" :movie="movie"></MovieCard>
        </SliderItem>
      </Slider>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import MovieCard from "@/components/MovieCard";
import Slider from "@/components/slider/Slider";
import SliderItem from "@/components/slider/SliderItem";

export default {
  computed: {
    ...mapGetters(["getMovieResults"]),

    numberOfSlides() {
        if (this.getMovieResults == null) return;
        const numOfSlides = this.getMovieResults.length / 4;
        if (numOfSlides >= 4) {
            return numOfSlides;
        }  else {
            return 4;
        }
    },
  },

  components: {
    MovieCard,
    Slider,
    SliderItem
  }
};
</script>