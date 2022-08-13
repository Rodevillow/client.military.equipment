<template>
  <div class="container" :class="{'container--with-borders': withBorders}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TheContainer',
  props: {
    withBorders: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/_variables.scss";

  .container {
    max-width: 1000px;
    width: 100%;
    padding: 0;

    &--with-borders {
      @media screen and (min-width: 1000px) {
        border-left: 1px solid $light-low-color;
        border-right: 1px solid $light-low-color;
      }
    }
  }
</style>
