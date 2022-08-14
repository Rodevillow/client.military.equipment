<template>
  <div>
    <TheHeader />
    <TheContainer :with-borders="true">
      <img class="background-photo" src="~/assets/images/ukraine.webp" alt="Ukraine">
      <Nuxt class="page" />
    </TheContainer>
    <TheFooter />
  </div>
</template>

<script>
  import TheHeader from "~/components/TheHeader";
  import TheFooter from "~/components/TheFooter";
  import TheContainer from "~/components/TheContainer";

  export default {
    name: "LayoutDefault",
    components: {
      TheHeader,
      TheFooter,
      TheContainer
    }
  }
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.background-photo {
  position: absolute;
  z-index: -1;
  left: 0;
  top: 69px;
  width: 100vw;
  height: calc(100vh - 69px - 69px);
  opacity: 0.2;
  object-fit: cover;
}

.page {
  min-height: calc(100vh - $header-min-height - $footer-min-height);
  height: 100%;
  padding: $padding-default * 2;
  background-color: $dark-color;
  opacity: 0.9;
  margin-left: 0;
  margin-right: 0;
}
</style>
