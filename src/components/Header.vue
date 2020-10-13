<template>
  <header class="header">
    <router-link :to="{ name: 'Home' }">
      <div class="movie-finder-logo">movieFinder</div>
    </router-link>
  </header>
</template>

<style scoped lang="scss">
@import "../styles/variables.scss";

.header {
  padding: 1rem 2rem;
  text-align: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  .movie-finder-logo {
    background: $primary;
    display: inline;
    padding: 0.5rem;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    font-weight: 900;
  }
}
</style>