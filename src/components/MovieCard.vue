<template>
  <router-link :to="{ name: 'Details', params: { movieId: movie.imdbID } }" class="movie-card">
    <div class="movie-poster" :class="{ 'extended' : extended }">
      <img v-if="movie.Poster" :src="movie.Poster" :alt="movie.Title" />
      <div v-else class="poster-placeholder">Poster not found</div>
    </div>

    <div class="movie-caption">
      <div v-if="extended" class="movie-title my-4">
        <h1>{{ movie.Title }}</h1>
      </div>

      <h3 v-else class="movie-title">{{ movie.Title }}</h3>
      <span v-if="!extended" class="movie-year">
        -
        <span class="movie-year">{{ movie.Year }}</span>
      </span>

      <div v-if="extended">
        <div class="my-4">
          <b>Year</b>
          <p>{{ movie.Year }}</p>
        </div>

        <div v-if="movie.Director" class="my-4">
          <b>Directed by</b>
          <p>{{ movie.Director }}</p>
        </div>

        <div v-if="movie.Actors" class="my-4">
          <b>Actors</b>
          <p>{{ movie.Actors }}</p>
        </div>

         <div v-if="movie.Plot" class="my-4">
          <b>Plot</b>
          <p>{{ movie.Plot }}</p>
        </div>

        <div v-if="movie.Description" class="my-4">
          <b>Description</b>
          <p>{{ movie.Description }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    extended: {
      type: Boolean,
      default: false
    },
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

    .movie-title {
      display: inline;
    }
    .movie-year {
      margin-left: 0.8rem;
    }
  }

  .movie-poster {
    height: 320px;
    background: $light-gray;
    border-radius: 1rem 1rem 0 0 ;
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

  .movie-poster.extended {
    img {
      object-fit: contain;
    }
  }

  .poster-placeholder {
    background: $light-gray;
  }
}

.movie-card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>