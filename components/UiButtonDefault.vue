<template>
  <button class="btn btn-default" @click="onClickButton" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: "UiButtonDefault",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickButton(event) {
      if (this.disabled) {
        return;
      }
      this.$emit('on-click', event);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.btn.btn-default {
  border: 1px solid $light-low-color;
  color: $light-low-color;
  border-radius: $border-radius-default;

  &:hover {
    border-color: $light-color;
    color: $light-color;
  }
}

</style>
