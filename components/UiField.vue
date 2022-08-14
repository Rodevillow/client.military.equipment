<template>
  <div class="ui-field">
    <div class="ui-field__label"
         :class="{'ui-field--active': !isValueEmpty && isErrorsEmpty, 'ui-field--error': !isErrorsEmpty}"
    >
      {{ label }}
    </div>
    <div class="ui-field__input">
      <slot />
    </div>
    <div class="ui-field__errors" v-if="errors.length > 0">
      <span class="ui-field__error"
            v-for="error in errors"
            :key="error"
      >{{ error }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiField",
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    errors: {
      type: Array,
      default: []
    },
  },
  computed: {
    isValueEmpty() {
      return this.value.length === 0;
    },
    isErrorsEmpty() {
      return this.errors.length === 0;
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.ui-field {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  transition: .1s;

  &:hover {
    .ui-field__label {
      color: $light-color;
      transition: .1s;
    }
  }

  &--error {
    color: $error-color !important;
  }

  &--active {
    color: $light-color !important;
    transition: .1s !important;
  }

  &__input {
    width: 100%;
  }

  &__label {
    position: absolute;
    left: $padding-default * 2;
    transform: translate(0, -50%);
    background-color: $dark-color;
    color: $light-low-color;
    padding: 0 3px;
    z-index: 1;
  }

  &__error {
    color: $error-color;
    margin-top: calc($margin-default / 2);
    font-size: 12px;
    display: block;
  }

  &__errors {}
}
</style>
