<template>
  <div>
    <div v-if="sliderItems.length" class="controls my-4">
      <button class="btn btn-prev" @click="previousSlide">&#60;</button>
      <button class="btn btn-next" @click="nextSlide">&#62;</button>
    </div>

    <div class="slider">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direction: "right",
      idx: 0,
      sliderItems: []
    };
  },

  methods: {
    nextSlide() {
      this.idx++;
      this.direction = 'right';
      if (this.idx >= this.sliderItems.length) {
        this.idx = 0;
      }
    },

    previousSlide() {
      this.idx--;
      this.direction = 'left';
      if (this.idx < 0) {
        this.idx = this.sliderItems.length - 1;
      }
    }
  },

  mounted() {
    this.sliderItems = this.$children;
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";

.slider {
  position: relative;

  a {
    text-decoration: none;
    color: inherit;
  }
}

.controls {
  width: 100%;
  display: flex;
  justify-self: right;

  .btn {
    display: inline-flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid $gray;
    border-radius: 50%;
    color: $gray;
    font-size: 1rem;
  }

  .btn-prev {
    margin-right: 0.25rem;
  }
  .btn-next {
    margin-left: 0.25rem;
  }
}
</style>