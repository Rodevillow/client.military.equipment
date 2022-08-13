<template>
  <header class="header">
    <TheContainer class="header__container">
      <div class="header__logo">
        <NuxtLink to="/" tag="div">
          <img src="~/assets/icons/ukraine.svg" alt="Ukraine Logo">
        </NuxtLink>
      </div>
      <div class="header__menu">
        <ul>

          <NuxtLink to="/signup" tag="li">
            Регестрація
          </NuxtLink>

          <NuxtLink to="/signin" tag="li">
            Увійти
          </NuxtLink>

          <li>
            Вийти
          </li>

        </ul>
      </div>
    </TheContainer>
  </header>
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

.header {
  height: 69px;
  width: 100%;
  border-bottom: 1px solid $light-low-color;

  &__container {
    height: $header-min-height;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: $padding-default * 2;
    padding-right: $padding-default * 2;
  }

  &__logo {
    font-size: 18px;
    font-family: 'KoHo', sans-serif;
    font-weight: 300;
    cursor: pointer;

    img {
      width: 34px;
    }
  }

  &__menu {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;

      li {
        margin-left: $margin-default * 2;
        cursor: pointer;
        font-size: 12px;
        color: $light-low-color;

        &:hover {
          color: $light-color;
        }
      }
    }
  }
}
</style>
