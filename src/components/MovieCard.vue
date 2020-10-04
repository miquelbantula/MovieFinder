<template>
  <div class="movie-card">
    <div class="movie-poster">
      <img v-if="movie.Poster" :src="movie.Poster" :alt="movie.Title" />
      <div v-else class="poster-placeholder">Poster not found</div>
    </div>

    <div class="movie-caption">
      <h3 class="movie-title">{{ movie.Title }}</h3>
      <p>{{ movie.Year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.movie-card {
  border: 1px solid #dedede;
  border-radius: 1rem;
  box-shadow: 0px 0px 16px 3px rgba(232,232,232,1);

  .movie-caption {
    padding: 0.5rem;
  }

  .movie-poster {
    height: 320px;
    background: $light-gray;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
  }

  .poster-placeholder {
    background: $light-gray;
  }
}
</style>