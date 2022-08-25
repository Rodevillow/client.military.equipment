<template>
  <button class="btn btn-default"
          @click="onClickButton"
          :class="{'is-accent': isAccent}"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "UiButtonDefault",
  props: {
    isAccent: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickButton(event) {
      this.$emit('custom-click', event);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.is-accent {
  border: 1px solid $light-color !important;
  color: $light-color !important;
}

.btn.btn-default {
  border: 1px solid $light-low-color;
  color: $light-low-color;
  border-radius: $border-radius-default;

  &:hover {
    border-color: $light-low-color;
    color: $light-low-color;
  }
}

</style>
