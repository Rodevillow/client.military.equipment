<template>
  <div class="ui-block-slider">
    <div class="ui-block-slider__image">
      <img src="~/assets/images/MLRS_M270.png" alt="MLRS M270">
    </div>
    <div class="ui-block-slider__indicator">
      <span></span>
      <span class="active"></span>
      <span></span>
      <span></span>
    </div>
    <div class="ui-block-slider__previews">
      {{ images }}
<!--      <div v-for="image in images" :key="image">{{ image }}</div>-->
      <img v-for="image in images" :src="image" :alt="image" :key="image">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Object | Array,
      default: [
        '~/assets/images/MLRS_M270.png',
        '~/assets/images/MLRS_M270.png',
        '~/assets/images/MLRS_M270.png',
        '~/assets/images/MLRS_M270.png',
        '~/assets/images/MLRS_M270.png'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.ui-block-slider {
  position: relative;

  &__image {
    img {
      width: 100%;
    }
  }

  &__indicator {
    position: absolute;
    display: block;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);

    span {
      border-radius: 50%;
      margin: 0 2px;
      display: inline-block;
      height: 8px;
      width: 8px;
      background-color: $dark-color;
      z-index: 99;
      border: 1px solid $light-low-color;

      &.active {
        background-color: $light-color;
        border: 1px solid $light-color;
      }
    }
  }
}
</style>
