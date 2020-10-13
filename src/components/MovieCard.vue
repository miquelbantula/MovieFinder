<template>
  <router-link :to="{ name: 'Details', params: { movieId: movie.imdbID } }" class="movie-card">
    <div class="movie-poster">
      <img v-if="movie.Poster" :src="movie.Poster" :alt="movie.Title" />
      <div v-else class="poster-placeholder">Poster not found</div>
    </div>

    <div class="movie-caption">
      <h3 class="movie-title">{{ movie.Title }}</h3>
      <span class="movie-year">-<span class="movie-year">{{ movie.Year }}</span></span>
    </div>
  </router-link>
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.2s ease-in-out;
  text-decoration: none;
    color: inherit;

  .movie-caption {
    padding: 1rem;
    text-align: left;
    
    .movie-title { display: inline }
    .movie-year { margin-left: .8rem }
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

.movie-card:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>