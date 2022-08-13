<template>
  <div class="item" v-touch:tap="touchHandler">
    <div class="item__image">
      <div class="item__image__default" v-if="!imgUrl">
        <img src="~/assets/icons/ukraine.svg" alt="Ukraine Logo">
      </div>
      <img v-if="imgUrl" :src="imgUrl" alt="MLRS M270">
    </div>
    <div class="item__content">
      <div class="item__content__title"># MLRS M270</div>
      <div class="item__content__description">
        Реактивна Самохідна Артилерія. M142 HIMARS создан на базе трёхосного («пятитонника») колёсного шасси FMTV
        Армии США (англ. Family of Medium Tactical Vehicles — семейство средних тактических автомобилей), может...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiBlockItem",
  props: {
    imgUrl: {
      type: String,
      default: null
    }
  },
  methods: {
    touchHandler() {
      alert('asdfsfsad');
    }
  }

}
</script>

<style lang="scss" scoped>

@import "@/assets/styles/_variables.scss";

.item {
  border: 1px solid $light-low-color;
  border-radius: $border-radius-default;
  margin-bottom: $margin-default * 2;
  opacity: $opacity-light;

  &:hover {
    opacity: 1;
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

    &__default {
      padding: $padding-default * 2;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        min-height: 150px;
        min-width: 150px;
        object-fit: none !important;
      }
    }

    img {
      max-height: 200px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: $padding-default;

    &__title {
      font-size: 18px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
    }

    &__description {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
    }
  }
}

</style>
