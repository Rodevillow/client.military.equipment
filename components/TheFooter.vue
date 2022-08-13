<template>
  <footer class="footer">
    <TheContainer class="footer__container">
      <div class="footer__text">
        Developed by <a href="https://github.com/Rodevillow">Rodevillow</a>. 2022
      </div>
    </TheContainer>
  </footer>
</template>

<script>
import TheContainer from "~/components/TheContainer";

export default {
  name: "TheHeader",
  components: {
    TheContainer
  }
}
</script>

<style lang="scss" scoped>

@import "@/assets/styles/_variables.scss";

.footer {
  height: $footer-min-height;
  width: 100%;
  border-top: 1px solid $light-low-color;
  color: $light-low-color;

  &__container {
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    font-size: 12px;
    a {
      color: $light-color;
    }
  }
}
</style>
