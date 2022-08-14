<template>
  <div class="input-wrapper">
    <div class="input-icon" v-if="!slotIsEmpty">
      <slot />
    </div>
    <input class="input"
           :class="{'input-full': slotIsEmpty, 'input--not-empty': !isValueEmpty && !isInvalid, 'input--is-invalid': isInvalid}"
           :type="type"
           :value="value"
           :placeholder="placeholder"
           @input="onInput"
           @focus="onFocus"
           @blur="onBlur"
    >
  </div>
</template>

<script>
export default {
  name: "UiInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: Array,
      default: []
    }
  },
  data: () => {
    return {
      slotIsEmpty: false
    }
  },
  computed: {
    isValueEmpty() {
      return this.value.length === 0;
    },
    isInvalid() {
      return this.errors.length > 0;
    }
  },
  mounted() {
    this.slotIsEmpty = !this.$slots.default
  },
  methods: {
    onInput(event) {
      this.$emit("on-input", event);
    },
    onFocus(event) {
      this.$emit("on-focus", event);
    },
    onBlur(event) {
      this.$emit("on-blue", event);
    }
  }
}
</script>

<style lang="scss" scoped>

@import "@/assets/styles/_variables.scss";

.input {
  padding-left: 40px;
  background-color: transparent;
  border: 1px solid $light-low-color;
  border-radius: $border-radius-default;
  height: 40px;
  width: 100%;
  color: $light-color;
  transition: .1s;

  &--is-invalid {
    border-color: $error-color !important;
  }

  &--not-empty {
    border-color: $light-color;
  }

  &:hover {
    border-color: $light-color;
    transition: .1s;
  }

  &::placeholder {
    color: $light-low-color;
  }

  &-full {
    padding-left: 10px !important;
  }

  &-wrapper {
    position: relative;
    width: 100%;

  }
  &-icon {
    position: absolute;
    left: 10px;
    max-width: 30px;
    max-height: 30px;
    top: 9px;

    svg {
      transition: .05s;
      stroke: $light-low-color;
      path {
        transition: .05s;
        stroke: $light-low-color;
      }
    }

    &:hover {
      svg {
        transition: .05s;
        stroke: $light-color !important;
        path {
          transition: .05s;
          stroke: $light-color !important;
        }
      }
    }
  }
}

</style>
