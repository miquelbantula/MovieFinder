<template>
  <div id="app">
    <div id="wrapper">
      <Header />

      <div class="my-4">
        <SearchMovies />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SearchMovies from "@/components/SearchMovies";

export default {
  components: {
    Header,
    SearchMovies
  }
};
</script>

<style lang="scss">
@import "./styles/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#wrapper {
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
}

// general classes
.my-4 {
  margin: 2rem 0;
}
.my-5 {
  margin: 4rem 0;
}
.mt-5 {
  margin-top: 4rem;
}

.mb-4 {
  margin-bottom: 2rem;
}
</style>
