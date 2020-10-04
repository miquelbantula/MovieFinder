<template>
  <div id="app">
    <div id="wrapper">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#wrapper {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

// general classes
.my-4 {
  margin: 2rem 0;
}
</style>
