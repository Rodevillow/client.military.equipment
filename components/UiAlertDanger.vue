<template>
  <div class="alert alert-warning d-flex justify-content-between align-items-start" role="alert">
    <img class="alert-icon" src="~/assets/icons/warning.svg" alt="Warning">
    <div class="ml-3 mr-3">{{ message }}</div>
    <img class="alert-close-btn" src="~/assets/icons/close.svg" @click="handleCloseClick" alt="Close">
  </div>
</template>

<script>
export default {
  name: "UiAlertDanger",
  props: {
    message: {
      type: String,
      default() {
        return ""
      }
    }
  },
  methods: {
    handleCloseClick(e) {
      this.$emit('custom-close');
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-close {
  width: 10px;
  height: 10px;
  position: absolute;
  right: 5px;
  top: 5px;
}

.alert {
  &-icon {
    position: absolute;
    top: 12px;
    left: 12px;
  }
  &-close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
  }
}
</style>
